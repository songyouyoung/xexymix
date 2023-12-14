package com.xexymix.app.service;

import com.xexymix.app.dao.ItemDao;
import com.xexymix.app.domain.ItemDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ItemService {
    @Autowired
    ItemDao itemDao;

///////////////////
//    header - 최근 본 상품
///////////////////
    public List<ItemDto> showHistory(List<String> historyList){
        return itemDao.selectHistory(historyList);
    }

///////////////////
//    index
///////////////////
    public Map<String, Object> showIndex(){
        Map<String, Object> indexList = new HashMap<>();
    // 메인배너
        indexList.put("mainBanner", itemDao.selectMainBanner());
    // best
        String search = "best";
        indexList.put("best", itemDao.selectItem(search));
    // md pick
        List<Map<String, String>> mp = itemDao.selectMdPick();
        List<ItemDto> mdPick = new ArrayList<>();
        int i = 0;
        for(Map<String, String> item:mp){
            Map<String, Object> mpItem = new HashMap<>();
            mpItem.put("search", "md");
            List<String> val = List.of(item.get("itemSub").split("\\|"));
            mpItem.put("val", val);
            mdPick.add(new ItemDto(item.get("itemNo"), item.get("itemName"), item.get("itemDesc"), item.get("itemImg")));
            mdPick.get(i).setItemSub(itemDao.selectItem(mpItem));
            i += 1;
        }
        indexList.put("mdPick", mdPick);
    // 카테고리별
        List<List<ItemDto>> cate = new ArrayList<>();
        Map<String, String> cateDesc = new HashMap<>();
        cateDesc.put("search", "cate");
        // mens
        cateDesc.put("val", "mens");
        cateDesc.put("limit", "28");
        cate.add(itemDao.selectItem(cateDesc));
        // top
        cateDesc.put("val", "top");
        cateDesc.put("limit", "28");
        cate.add(itemDao.selectItem(cateDesc));
        // bottom
        cateDesc.put("val", "bottom");
        cateDesc.put("limit", "28");
        cate.add(itemDao.selectItem(cateDesc));
        // outer
        cateDesc.put("val", "outer");
        cateDesc.put("limit", "20");
        cate.add(itemDao.selectItem(cateDesc));
        // golf
        cateDesc.put("val", "golf");
        cateDesc.put("limit", "16");
        cate.add(itemDao.selectItem(cateDesc));
        // kids
        cateDesc.put("val", "kids");
        cateDesc.put("limit", "16");
        cate.add(itemDao.selectItem(cateDesc));

        indexList.put("cate", cate);
        return indexList;
    }

///////////////////
//    상세페이지
///////////////////
    public Map<String, Object> showItemDetail(String itemNo){
        Map<String, Object> itemDetail = new HashMap<>();
        itemDetail.put("item", itemDao.selectItemDetail(itemNo));
        return itemDetail;
    }
}
