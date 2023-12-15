package com.xexymix.app.domain;

public class CartDto {
    private Integer cartNo;
    private int userNo;
    private String itemNo;
    private int cartCnt;
    private String cartOpt;

    public Integer getCartNo() {
        return cartNo;
    }

    public void setCartNo(Integer cartNo) {
        this.cartNo = cartNo;
    }

    public int getUserNo() {
        return userNo;
    }

    public void setUserNo(int userNo) {
        this.userNo = userNo;
    }

    public String getItemNo() {
        return itemNo;
    }

    public void setItemNo(String itemNo) {
        this.itemNo = itemNo;
    }

    public int getCartCnt() {
        return cartCnt;
    }

    public void setCartCnt(int cartCnt) {
        this.cartCnt = cartCnt;
    }

    public String getCartOpt() {
        return cartOpt;
    }

    public void setCartOpt(String cartOpt) {
        this.cartOpt = cartOpt;
    }

    @Override
    public String toString() {
        return "CartDto{" +
                "cartNo=" + cartNo +
                ", userNo=" + userNo +
                ", itemNo='" + itemNo + '\'' +
                ", cartCnt=" + cartCnt +
                ", cartOpt='" + cartOpt + '\'' +
                '}';
    }
}
