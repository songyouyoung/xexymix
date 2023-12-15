package com.xexymix.app.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class BuyDto {
    private Integer buyAuto;
    private long buyNo;
    private String itemNo;
    private int buyCnt;
    private String buyOpt;
    private String buyCode;
    private int userNo;
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

    public int getUserNo() {
        return userNo;
    }

    public void setUserNo(int userNo) {
        this.userNo = userNo;
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
                ", buyCnt=" + buyCnt +
                ", buyOpt='" + buyOpt + '\'' +
                ", buyCode='" + buyCode + '\'' +
                ", userNo=" + userNo +
                ", buyDate=" + buyDate +
                '}';
    }
}
