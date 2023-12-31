package com.xexymix.app.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class QnaDto {
    private Integer qnaNo;
    private Integer userNo;
    private String itemNo;
    private String itemName;
    private String itemImg;
    private String userName;
    private String qnaTxt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date qnaRegDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date qnaUpDate;
    private String qnaFile;
    private String qnaFileOri;
    private String qnaAnswer;

    public QnaDto() {
    }

    public QnaDto(Integer qnaNo, String qnaTxt) {
        this.qnaNo = qnaNo;
        this.qnaTxt = qnaTxt;
    }

    public QnaDto(Integer qnaNo, String qnaTxt, String qnaFile) {
        this.qnaNo = qnaNo;
        this.qnaTxt = qnaTxt;
        this.qnaFile = qnaFile;
    }

    public Integer getQnaNo() {
        return qnaNo;
    }

    public void setQnaNo(Integer qnaNo) {
        this.qnaNo = qnaNo;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getQnaTxt() {
        return qnaTxt;
    }

    public void setQnaTxt(String qnaTxt) {
        this.qnaTxt = qnaTxt;
    }

    public Date getQnaRegDate() {
        return qnaRegDate;
    }

    public void setQnaRegDate(Date qnaRegDate) {
        this.qnaRegDate = qnaRegDate;
    }

    public Date getQnaUpDate() {
        return qnaUpDate;
    }

    public void setQnaUpDate(Date qnaUpDate) {
        this.qnaUpDate = qnaUpDate;
    }

    public String getQnaFile() {
        return qnaFile;
    }

    public void setQnaFile(String qnaFile) {
        this.qnaFile = qnaFile;
    }

    public String getQnaFileOri() {
        return qnaFileOri;
    }

    public void setQnaFileOri(String qnaFileOri) {
        this.qnaFileOri = qnaFileOri;
    }

    public String getQnaAnswer() {
        return qnaAnswer;
    }

    public void setQnaAnswer(String qnaAnswer) {
        this.qnaAnswer = qnaAnswer;
    }

    @Override
    public String toString() {
        return "QnaDto{" +
                "qnaNo=" + qnaNo +
                ", userNo=" + userNo +
                ", itemNo='" + itemNo + '\'' +
                ", itemName='" + itemName + '\'' +
                ", itemImg='" + itemImg + '\'' +
                ", userName='" + userName + '\'' +
                ", qnaTxt='" + qnaTxt + '\'' +
                ", qnaRegDate=" + qnaRegDate +
                ", qnaUpDate=" + qnaUpDate +
                ", qnaFile='" + qnaFile + '\'' +
                ", qnaFileOri='" + qnaFileOri + '\'' +
                ", qnaAnswer='" + qnaAnswer + '\'' +
                '}';
    }
}
