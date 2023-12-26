package com.xexymix.app.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class ReviewDto {
    private Integer revNo;
    private Integer userNo;
    private String itemNo;
    private String itemName;
    private String itemImg;
    private Long buyNo;
    private Integer buyAuto;
    private String userName;
    private int revScore;
    private String revTxt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date revRegDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date revUpDate;
    private int revLike;
    private String revFile;
    private String revFileOri;

    public Integer getRevNo() {
        return revNo;
    }

    public void setRevNo(Integer revNo) {
        this.revNo = revNo;
    }

    public Integer getUserNo() {
        return userNo;
    }

    public void setUserNo(Integer userNo) {
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

    public Long getBuyNo() {
        return buyNo;
    }

    public void setBuyNo(Long buyNo) {
        this.buyNo = buyNo;
    }

    public Integer getBuyAuto() {
        return buyAuto;
    }

    public void setBuyAuto(Integer buyAuto) {
        this.buyAuto = buyAuto;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getRevScore() {
        return revScore;
    }

    public void setRevScore(int revScore) {
        this.revScore = revScore;
    }

    public String getRevTxt() {
        return revTxt;
    }

    public void setRevTxt(String revTxt) {
        this.revTxt = revTxt;
    }

    public Date getRevRegDate() {
        return revRegDate;
    }

    public void setRevRegDate(Date revRegDate) {
        this.revRegDate = revRegDate;
    }

    public Date getRevUpDate() {
        return revUpDate;
    }

    public void setRevUpDate(Date revUpDate) {
        this.revUpDate = revUpDate;
    }

    public int getRevLike() {
        return revLike;
    }

    public void setRevLike(int revLike) {
        this.revLike = revLike;
    }

    public String getRevFile() {
        return revFile;
    }

    public void setRevFile(String revFile) {
        this.revFile = revFile;
    }

    public String getRevFileOri() {
        return revFileOri;
    }

    public void setRevFileOri(String revFileOri) {
        this.revFileOri = revFileOri;
    }

    @Override
    public String toString() {
        return "ReviewDto{" +
                "revNo=" + revNo +
                ", userNo=" + userNo +
                ", itemNo='" + itemNo + '\'' +
                ", itemName='" + itemName + '\'' +
                ", itemImg='" + itemImg + '\'' +
                ", buyNo=" + buyNo +
                ", buyAuto=" + buyAuto +
                ", userName='" + userName + '\'' +
                ", revScore=" + revScore +
                ", revTxt='" + revTxt + '\'' +
                ", revRegDate=" + revRegDate +
                ", revUpDate=" + revUpDate +
                ", revLike=" + revLike +
                ", revFile='" + revFile + '\'' +
                ", revFileOri='" + revFileOri + '\'' +
                '}';
    }
}
