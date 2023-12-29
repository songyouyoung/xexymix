package com.xexymix.app.domain;

public class CartDto {
    private Integer cartNo;
    private int userNo;
    private String itemNo;
    private String itemName;
    private String itemImg;
    private Integer itemPrice;
    private Integer evPer;
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

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemImg() {
        return itemImg;
    }

    public void setItemImg(String itemImg) {
        this.itemImg = itemImg;
    }

    public Integer getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(Integer itemPrice) {
        this.itemPrice = itemPrice;
    }

    public Integer getEvPer() {
        return evPer;
    }

    public void setEvPer(Integer evPer) {
        this.evPer = evPer;
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
                ", itemName='" + itemName + '\'' +
                ", itemImg='" + itemImg + '\'' +
                ", itemPrice=" + itemPrice +
                ", evPer=" + evPer +
                ", cartCnt=" + cartCnt +
                ", cartOpt='" + cartOpt + '\'' +
                '}';
    }
}
