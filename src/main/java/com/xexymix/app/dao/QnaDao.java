package com.xexymix.app.dao;

import com.xexymix.app.domain.QnaDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class QnaDao {
    @Autowired
    SqlSession session;

    String namespace = "com.xexymix.app.dao.qnaMapper.";

    public int selectQnaCnt(String itemNo){
        return session.selectOne(namespace + "selectQnaCnt", itemNo);
    }

    public List<QnaDto> selectQna(Map<String, String> qnaDesc){
        return session.selectList(namespace + "selectQna", qnaDesc);
    }

    public int updateQna(QnaDto qnaDesc){
        return session.update(namespace + "updateQna", qnaDesc);
    }

    public Integer deleteQna(Map<String, Integer> qnaDesc){
        return session.delete(namespace + "deleteQna", qnaDesc);
    }
    public Integer insertQna(QnaDto qnaDesc){
        return session.delete(namespace + "insertQna", qnaDesc);
    }
}
