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
    public Map<String, List<ItemDto>> showIndex(){
        Map<String, List<ItemDto>> indexList = new HashMap<>();
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
            Map<String, String> mpItem = new HashMap<>();
            mpItem.put("search", "map");
            mpItem.put("val", item.get("itemSub"));
            mdPick.add(new ItemDto(item.get("itemNo"), item.get("itemName"), item.get("itemDesc")));
            mdPick.get(i).setItemSub(itemDao.selectItem(mpItem));
            i += 1;
        }
        indexList.put("mdPick", mdPick);
    // 카테고리별
        // mens
        Map<String, String> cate = new HashMap<>();
        cate.put("search", "cate");
        cate.put("val", "mens");
        cate.put("limit", "28");
        indexList.put("cate_mens", itemDao.selectItem(cate));
        // top
        cate.put("val", "top");
        cate.put("limit", "28");
        indexList.put("cate_top", itemDao.selectItem(cate));
        // bottom
        cate.put("val", "bottom");
        cate.put("limit", "28");
        indexList.put("cate_bottom", itemDao.selectItem(cate));
        // outer
        cate.put("val", "outer");
        cate.put("limit", "20");
        indexList.put("cate_outer", itemDao.selectItem(cate));
        // golf
        cate.put("val", "golf");
        cate.put("limit", "16");
        indexList.put("cate_golf", itemDao.selectItem(cate));
        // kids
        cate.put("val", "kids");
        cate.put("limit", "16");
        indexList.put("cate_kids", itemDao.selectItem(cate));

        return indexList;
    }
}
