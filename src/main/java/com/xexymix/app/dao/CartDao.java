package com.xexymix.app.dao;

import com.xexymix.app.domain.CartDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartDao {
    @Autowired
    SqlSession session;

    String namespace = "com.xexymix.app.dao.cartMapper.";
    
///////////////////
//    장바구니 추가
///////////////////
    public int insertCart(List<CartDto> cartDesc){
        return session.insert(namespace + "insertCart", cartDesc);
    }

    public int selectCartCnt(int userNo){
        return session.selectOne(namespace + "selectCartCnt", userNo);
    }

    public List<CartDto> selectCart(int userNo){
        return session.selectList(namespace + "selectCart", userNo);
    }
}
