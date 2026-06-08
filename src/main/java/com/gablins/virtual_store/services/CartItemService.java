package com.gablins.virtual_store.services;

import com.gablins.VO.CartItemDTO;
import com.gablins.configuration.JWTUserData;
import com.gablins.exceptions.CartItemNotFoundException;
import com.gablins.exceptions.ProductNotFoundException;
import com.gablins.exceptions.UserNotFoundException;
import com.gablins.virtual_store.controllers.CartItemController;
import com.gablins.virtual_store.entities.CartItem;
import com.gablins.virtual_store.entities.Product;
import com.gablins.virtual_store.entities.User;
import com.gablins.virtual_store.repositories.CartItemRepository;
import com.gablins.virtual_store.repositories.ProductRepository;
import com.gablins.virtual_store.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class CartItemService
{
    @Autowired
    private CartItemRepository repository;

    private final UserRepository userRepository;

    private final UserServices userServices;
    private final ProductRepository productRepository;

    public CartItemService(UserRepository userRepository, UserServices userServices, ProductRepository productRepository)
    {
        this.userRepository = userRepository;
        this.userServices = userServices;
        this.productRepository = productRepository;
    }

    public List<CartItemDTO> findAll(Long userId)
    {
        var findAll = repository.findByUserId(userId);
        var user = userServices.findById(userId);

        for (CartItem item : findAll) {
            addHateoasLinks(CartItemDTO.convertToDTO(item), user, item.getProduct().getId());
        }

        var data = findAll.stream().map(l -> CartItemDTO.convertToDTO(l)).toList();
        int count = 1;
        for (CartItemDTO dto : data) {

            dto.setListOrder(count);
            //CartItem cartItem = repository.findByProductIdAndUserId(dto.getId(),userId).orElseThrow(() -> new CartItemNotFoundException("Cart Item not found"));
            addHateoasLinks(dto, user, dto.getId());
            count++;
        }
        return data;
    }
    /*
    public CartItemDTO findByOrder(Long orderNumber)
    {
        var response = repository.findByListOrder(orderNumber);
        addHateoasLinks(CartItemDTO.convertToDTO(response),response.getUser(),response.getProduct().getId());
        return CartItemDTO.convertToDTO(response);
    }
    */


    public CartItemDTO findById(long userId, Long id)
    {
        //var entity = repository.findByProductIdAndUserId(productId, userId).map(CartItemDTO::convertToDTO).orElseThrow(() -> new CartItemNotFoundException("Cart Item Not Found"));
        var entity = repository.findByIdAndUserId(id, userId).map(CartItemDTO::convertToDTO).orElseThrow(() -> new CartItemNotFoundException("Cart Item not found"));

        System.out.println(entity
        );
        var user = userServices.findById(userId);

        addHateoasLinks(entity, user, id);
        System.out.println(entity);
        return entity;
    }


    public CartItemDTO addOrUpdate(CartItem cartItem)
    {
        User user = userRepository.findById(cartItem.getUser().getId()).orElseThrow(() -> new UserNotFoundException("User Not Found"));
        System.out.println("Buscando usuário com id:" + user.getId());

        Product product = productRepository.findById(cartItem.getProduct().getId()).orElseThrow(() -> new ProductNotFoundException("Product Not Found"));
        System.out.println("Buscando produto com ID: " + product.getId());
        var entity = repository.findByUserId(user.getId());
        Optional<CartItem> result = entity.stream().filter(c -> c.getProduct().getId() == cartItem.getProduct().getId()).findFirst();
        System.out.println(result);
        if (result.isPresent()) {

            CartItem c = result.get();
            System.out.println(c.getQuantity());
            c.setQuantity(c.getQuantity() + 1);
            var saved = repository.save(c);
            var response = CartItemDTO.convertToDTO(saved);

            addHateoasLinks(response, cartItem.getUser(), cartItem.getProduct().getId());
            return response;

        } else {


            System.out.println("encontrado");
            CartItem item = new CartItem();
            item.setUser(user);
            item.setProduct(product);
            item.setQuantity(1);
            item.setPrice(product.getPrice());

            user.getCartItems().add(item);
            var saved = repository.save(item);

            System.out.println("saved:" + saved.getId());


            var response = CartItemDTO.convertToDTO(saved);


            addHateoasLinks(response, cartItem.getUser(), cartItem.getProduct().getId());
            return response;
        }

    }

    public CartItemDTO update(Long productId, User user, int quantity)
    {
        CartItem cartItem = repository.findByIdAndUserId(productId, user.getId()).orElseThrow(() -> new ProductNotFoundException("Product Not Found"));
        cartItem.setQuantity(quantity);
        var result = repository.save(cartItem);
        var data = CartItemDTO.convertToDTO(result);

        return data;

    }


    public void delete(long userId, Long id)
    {
        CartItemDTO item = this.findById(userId, id);
        if (item.getProductQuantity() > 1) {
            CartItem cartItem = convertToEntity(item);
            cartItem.setQuantity(item.getProductQuantity() - 1);
            repository.save(cartItem);
        } else {
            CartItem cartItem = convertToEntity(item);
            repository.delete(cartItem);
        }


    }

    public void addHateoasLinks(CartItemDTO cartItem, User user, Long productId)
    {
        cartItem.add(linkTo(methodOn(CartItemController.class).getCartItem(cartItem.getId(), JWTUserData.builder().userId(user.getId()).email(user.getUsername()).build())).withRel("findById").withType("GET"));
        cartItem.add(linkTo(methodOn(CartItemController.class).getCartItems(JWTUserData.builder().userId(user.getId()).build())).withRel("findAll").withType("GET"));
        cartItem.add(linkTo(methodOn(CartItemController.class).addToCart(null, null)).withRel("create").withType("POST"));
        cartItem.add(linkTo(methodOn(CartItemController.class).delete(productId, JWTUserData.builder().email(user.getUsername()).userId(user.getId()).build())).withRel("deleteById").withType("DELETE"));

    }

    public CartItem convertToEntity(CartItemDTO cartItemDTO)
    {
        CartItem item = repository.findByProductIdAndUserId(cartItemDTO.getProductId(), cartItemDTO.getUserId()).get();
        return item;

    }


}
