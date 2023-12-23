package com.xexymix.app.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class BuyDto {
    private Integer buyAuto;
    private long buyNo;
    private String itemNo;
    private String itemName;
    private String itemImg;
    private int buyCnt;
    private String buyOpt;
    private String buyCode;
    private boolean buyRevChk;
    private int userNo;
    private int itemPrice;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date buyDate;

    public Integer getBuyAuto() {
        return buyAuto;
    }

    public void setBuyAuto(Integer buyAuto) {
        this.buyAuto = buyAuto;
    }

    public long getBuyNo() {
        return buyNo;
    }

    public void setBuyNo(long buyNo) {
        this.buyNo = buyNo;
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

    public int getBuyCnt() {
        return buyCnt;
    }

    public void setBuyCnt(int buyCnt) {
        this.buyCnt = buyCnt;
    }

    public String getBuyOpt() {
        return buyOpt;
    }

    public void setBuyOpt(String buyOpt) {
        this.buyOpt = buyOpt;
    }

    public String getBuyCode() {
        return buyCode;
    }

    public void setBuyCode(String buyCode) {
        this.buyCode = buyCode;
    }

    public boolean isBuyRevChk() {
        return buyRevChk;
    }

    public void setBuyRevChk(boolean buyRevChk) {
        this.buyRevChk = buyRevChk;
    }

    public int getUserNo() {
        return userNo;
    }

    public void setUserNo(int userNo) {
        this.userNo = userNo;
    }

    public int getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(int itemPrice) {
        this.itemPrice = itemPrice;
    }

    public Date getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(Date buyDate) {
        this.buyDate = buyDate;
    }

    @Override
    public String toString() {
        return "BuyDto{" +
                "buyAuto=" + buyAuto +
                ", buyNo=" + buyNo +
                ", itemNo='" + itemNo + '\'' +
                ", itemName='" + itemName + '\'' +
                ", itemImg='" + itemImg + '\'' +
                ", buyCnt=" + buyCnt +
                ", buyOpt='" + buyOpt + '\'' +
                ", buyCode='" + buyCode + '\'' +
                ", buyRevChk=" + buyRevChk +
                ", userNo=" + userNo +
                ", itemPrice=" + itemPrice +
                ", buyDate=" + buyDate +
                '}';
    }
}
