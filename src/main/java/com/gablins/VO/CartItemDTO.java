package com.gablins.VO;

import com.gablins.virtual_store.entities.CartItem;
import com.gablins.virtual_store.entities.Product;
import com.gablins.virtual_store.entities.User;
import jakarta.persistence.*;
import org.springframework.hateoas.RepresentationModel;

import java.util.Objects;

public class CartItemDTO extends RepresentationModel<CartItemDTO>
{
    private Long id;
    private Long listOrder;
    private Long productId;
    private Long userId;
    private String productName;
    private double productPrice;
    private int productQuantity;



    public CartItemDTO(Long id, Long productId, Long userId, String productName, double productPrice, int productQuantity)
    {
        this.id = id;
        this.productId = productId;
        this.userId = userId;
        this.listOrder = 1L;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
    }

    public CartItemDTO(long listOrder)
    {
        this.listOrder = listOrder;
    }
    public Double subtotal()
    {
        return productPrice * productQuantity;
    }

    public long getListOrder()
    {
        return listOrder;
    }

    public void setListOrder(long listOrder)
    {
        this.listOrder = listOrder;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getProductName()
    {
        return productName;
    }

    public void setProductName(String productName)
    {
        this.productName = productName;
    }

    public double getProductPrice()
    {
        return productPrice;
    }

    public void setProductPrice(double productPrice)
    {
        this.productPrice = productPrice;
    }

    public int getProductQuantity()
    {
        return productQuantity;
    }

    public Long getProductId()
    {
        return productId;
    }

    public void setProductId(Long productId)
    {
        this.productId = productId;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (!(o instanceof CartItemDTO that)) return false;
        if (!super.equals(o)) return false;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getListOrder(), that.getListOrder());
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(super.hashCode(), getId(), getListOrder());
    }

    public void setProductQuantity(int productQuantity)
    {
        this.productQuantity = productQuantity;
    }

    public Long getUserId()
    {
        return userId;
    }

    public void setUserId(Long userId)
    {
        this.userId = userId;
    }

    public static CartItemDTO convertToDTO(CartItem cartItem)
    {
        return new CartItemDTO(
                cartItem.getId(),cartItem.getProduct().getId(),cartItem.getUser().getId(),cartItem.getProduct().getName(),cartItem.getProduct().getPrice(),cartItem.getQuantity()
        );

    }


}
