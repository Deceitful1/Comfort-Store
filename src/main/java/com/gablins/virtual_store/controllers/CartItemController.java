package com.gablins.virtual_store.controllers;

import com.gablins.VO.CartItemDTO;
import com.gablins.VO.ProductVO;
import com.gablins.configuration.JWTUserData;
import com.gablins.virtual_store.entities.CartItem;
import com.gablins.virtual_store.entities.Product;
import com.gablins.virtual_store.entities.User;
import com.gablins.virtual_store.services.CartItemService;
import com.gablins.virtual_store.services.ProductService;
import com.gablins.virtual_store.services.UserServices;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class CartItemController
{
    private final CartItemService cartItemService;
    private final UserServices userServices;
    private final ProductService productService;

    public CartItemController(CartItemService cartItemService, UserServices userServices, ProductService productService)
    {
        this.cartItemService = cartItemService;
        this.userServices = userServices;
        this.productService = productService;
    }

    @GetMapping()
    public ResponseEntity<List<CartItemDTO>> getCartItems(@AuthenticationPrincipal final JWTUserData user)
    {
        System.out.println(user);
        return ResponseEntity.status(200).body(cartItemService.findAll(Long.valueOf(user.userId())));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CartItemDTO> getCartItem(@PathVariable Long id, @AuthenticationPrincipal final JWTUserData user)
    {
        return ResponseEntity.status(200).body(cartItemService.findById(user.userId(),id));
    }

    @PostMapping
    public ResponseEntity<CartItemDTO> addToCart(@AuthenticationPrincipal final JWTUserData user, @RequestBody Long productId)
    {
        User user1 = userServices.findById(user.userId());
        ProductVO product = productService.findById(productId);
        CartItem item = new CartItem();
        item.setUser(user1);
        item.setProduct(Product.convertToProduct(product));
        item.getProduct().setId(productId);
        return ResponseEntity.status(201).body(cartItemService.addOrUpdate(item));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id, @AuthenticationPrincipal final JWTUserData user)
    {
        cartItemService.delete(user.userId(),id);
        return ResponseEntity.noContent().build();
    }


}
