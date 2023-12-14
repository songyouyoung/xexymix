package com.xexymix.app.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class QnaDto {
    private int qnaNo;
    private int userNo;
    private String itemNo;
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

    public QnaDto(int qnaNo, String qnaTxt) {
        this.qnaNo = qnaNo;
        this.qnaTxt = qnaTxt;
    }

    public QnaDto(int qnaNo, String qnaTxt, String qnaFile) {
        this.qnaNo = qnaNo;
        this.qnaTxt = qnaTxt;
        this.qnaFile = qnaFile;
    }

    public int getQnaNo() {
        return qnaNo;
    }

    public void setQnaNo(int qnaNo) {
        this.qnaNo = qnaNo;
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
