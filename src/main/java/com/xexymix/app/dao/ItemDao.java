package com.xexymix.app.dao;

import com.xexymix.app.domain.ItemDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class ItemDao {
    @Autowired
    SqlSession session;

    String namespace = "com.xexymix.app.dao.itemMapper.";

///////////////////
//    header
///////////////////
    public List<ItemDto> selectHistory(List<String> historyList){
        return session.selectList(namespace + "selectLookItem", historyList);
    }
///////////////////
//    index
///////////////////
    public List<ItemDto> selectMainBanner(){
        return session.selectList(namespace + "selectMainBanner");
    }
    public List<Map<String, String>> selectMdPick(){
        return session.selectList(namespace + "selectMdPick");
    }
    public List<ItemDto> selectItem(Object itemMap){
        return session.selectList(namespace + "selectItem", itemMap);
    }

///////////////////
//    상세 페이지
///////////////////
    public ItemDto selectItemDetail(String itemNo){
    return session.selectOne(namespace + "selectItem", itemNo);
}
}
