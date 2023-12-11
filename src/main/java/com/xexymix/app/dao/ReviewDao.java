package com.xexymix.app.dao;

import com.xexymix.app.domain.ItemDto;
import com.xexymix.app.domain.ReviewDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class ReviewDao {
    @Autowired
    SqlSession session;

    String namespace = "com.xexymix.app.dao.reviewMapper.";

    public int selectRevCnt(String itemNo){
        return session.selectOne(namespace + "selectRevCnt", itemNo);
    }

    public List<ReviewDto> selectRev(Map<String, String> revDesc){
        return session.selectList(namespace + "selectRev", revDesc);
    }

    public List<ReviewDto> selectRevBest(String itemNo){
        return session.selectList(namespace + "selectRevBest", itemNo);
    }
}
