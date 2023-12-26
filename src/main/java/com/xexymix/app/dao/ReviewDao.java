package com.xexymix.app.dao;

import com.xexymix.app.domain.QnaDto;
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

    public List<ReviewDto> selectRevBest(Map<String, String> itemNo){
        return session.selectList(namespace + "selectRevBest", itemNo);
    }

    public int selectRevScore(Map<String, String> revDesc){
        return session.selectOne(namespace + "selectRevScore", revDesc);
    }

    public int updateRev(ReviewDto revDesc){
        return session.update(namespace + "updateRev", revDesc);
    }

    public ReviewDto selectBuyRev(int buyAuto){
        return session.selectOne(namespace + "selectBuyRev", buyAuto);
    }

    public int insertRev(ReviewDto revDesc){
        return session.insert(namespace + "insertRev", revDesc);
    }

    public int selectBuyRevNo(int buyAuto){
        return session.selectOne(namespace + "selectBuyRevNo", buyAuto);
    }

    public int updateBuyRev(ReviewDto revDesc){
        return session.insert(namespace + "updateBuyRev", revDesc);
    }

    public int deleteRev(int revNo){
        return session.delete(namespace + "deleteRev", revNo);
    }
    public int updateItemRev(Map<String, String> revDesc){
        return session.update(namespace + "updateItemRev", revDesc);
    }
}
