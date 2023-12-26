package com.xexymix.app.dao;

import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.ItemDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class BuyDao {
    @Autowired
    SqlSession session;

    String namespace = "com.xexymix.app.dao.buyMapper.";

///////////////////
//    구입
///////////////////
    public int insertBuy(List<BuyDto> buyDesc){
        return session.insert(namespace + "insertBuy", buyDesc);
    }

    public String selectBuyNo(){
        return session.selectOne(namespace + "selectBuyNo");
    }

    public Integer deleteBuy(Long buyNo){return session.update(namespace + "deleteBuy", buyNo);}
}
