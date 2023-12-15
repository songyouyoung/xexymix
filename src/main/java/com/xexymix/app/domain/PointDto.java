package com.xexymix.app.domain;

public class PointDto {
    private Integer poNo;
    private long buyNo;
    private String itemNo;
    private Integer revNo;
    private Integer userNo;
    private Integer point;
    private String poTxt;

    public Integer getPoNo() {
        return poNo;
    }

    public void setPoNo(Integer poNo) {
        this.poNo = poNo;
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

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }

    public String getPoTxt() {
        return poTxt;
    }

    public void setPoTxt(String poTxt) {
        this.poTxt = poTxt;
    }

    @Override
    public String toString() {
        return "PointDto{" +
                "poNo=" + poNo +
                ", buyNo=" + buyNo +
                ", itemNo='" + itemNo + '\'' +
                ", revNo=" + revNo +
                ", userNo=" + userNo +
                ", point=" + point +
                ", poTxt='" + poTxt + '\'' +
                '}';
    }
}
