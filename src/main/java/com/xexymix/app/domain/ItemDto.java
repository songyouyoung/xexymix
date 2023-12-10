package com.xexymix.app.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

public class ItemDto {
    private String itemNo;
    private String itemName;
    private int itemPrice;
    private String itemDesc;
    private String itemCate;
    private String itemCateDetail;
    private String itemImg;
    private String itemImgSub;
    private String itemImgDetail;
    private int revCnt;
    private int itemDis;
    private String itemSize;
    private String itemColor;
    private String itemUni;
    private String itemEco;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date itemRegDate;
    private int itemCnt;
    private int itemSale;
    private List<ItemDto> itemSub;

    public ItemDto() {}
    public ItemDto(String itemNo, String itemName, String itemDesc, String itemImg) {
        this.itemNo = itemNo;
        this.itemName = itemName;
        this.itemDesc = itemDesc;
        this.itemImg = itemImg;
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

    public int getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(int itemPrice) {
        this.itemPrice = itemPrice;
    }

    public String getItemDesc() {
        return itemDesc;
    }

    public void setItemDesc(String itemDesc) {
        this.itemDesc = itemDesc;
    }

    public String getItemCate() {
        return itemCate;
    }

    public void setItemCate(String itemCate) {
        this.itemCate = itemCate;
    }

    public String getItemCateDetail() {
        return itemCateDetail;
    }

    public void setItemCateDetail(String itemCateDetail) {
        this.itemCateDetail = itemCateDetail;
    }

    public String getItemImg() {
        return itemImg;
    }

    public void setItemImg(String itemImg) {
        this.itemImg = itemImg;
    }

    public String getItemImgSub() {
        return itemImgSub;
    }

    public void setItemImgSub(String itemImgSub) {
        this.itemImgSub = itemImgSub;
    }

    public String getItemImgDetail() {
        return itemImgDetail;
    }

    public void setItemImgDetail(String itemImgDetail) {
        this.itemImgDetail = itemImgDetail;
    }

    public int getRevCnt() {
        return revCnt;
    }

    public void setRevCnt(int revCnt) {
        this.revCnt = revCnt;
    }

    public int getItemDis() {
        return itemDis;
    }

    public void setItemDis(int itemDis) {
        this.itemDis = itemDis;
    }

    public String getItemSize() {
        return itemSize;
    }

    public void setItemSize(String itemSize) {
        this.itemSize = itemSize;
    }

    public String getItemColor() {
        return itemColor;
    }

    public void setItemColor(String itemColor) {
        this.itemColor = itemColor;
    }

    public String getItemUni() {
        return itemUni;
    }

    public void setItemUni(String itemUni) {
        this.itemUni = itemUni;
    }

    public String getItemEco() {
        return itemEco;
    }

    public void setItemEco(String itemEco) {
        this.itemEco = itemEco;
    }

    public Date getItemRegDate() {
        return itemRegDate;
    }

    public void setItemRegDate(Date itemRegDate) {
        this.itemRegDate = itemRegDate;
    }

    public int getItemCnt() {
        return itemCnt;
    }

    public void setItemCnt(int itemCnt) {
        this.itemCnt = itemCnt;
    }

    public int getItemSale() {
        return itemSale;
    }

    public void setItemSale(int itemSale) {
        this.itemSale = itemSale;
    }

    public List<ItemDto> getItemSub() {
        return itemSub;
    }

    public void setItemSub(List<ItemDto> itemSub) {
        this.itemSub = itemSub;
    }

    @Override
    public String toString() {
        return "ItemDao{" +
                "itemNo='" + itemNo + '\'' +
                ", itemName='" + itemName + '\'' +
                ", itemPrice=" + itemPrice +
                ", itemDesc='" + itemDesc + '\'' +
                ", itemCate='" + itemCate + '\'' +
                ", itemCateDetail='" + itemCateDetail + '\'' +
                ", itemImg='" + itemImg + '\'' +
                ", itemImgSub='" + itemImgSub + '\'' +
                ", itemImgDetail='" + itemImgDetail + '\'' +
                ", revCnt=" + revCnt +
                ", itemDis=" + itemDis +
                ", itemSize='" + itemSize + '\'' +
                ", itemColor='" + itemColor + '\'' +
                ", itemUni='" + itemUni + '\'' +
                ", itemEco='" + itemEco + '\'' +
                ", itemRegDate=" + itemRegDate +
                ", itemCnt=" + itemCnt +
                ", itemSale=" + itemSale +
                ", itemSub=" + itemSub +
                '}';
    }
}
