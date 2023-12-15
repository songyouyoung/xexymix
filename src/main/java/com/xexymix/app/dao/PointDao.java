package com.xexymix.app.dao;

import com.xexymix.app.domain.PointDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class PointDao {
    @Autowired
    SqlSession session;

    String namespace = "com.xexymix.app.dao.pointMapper.";

    public int insertPoint(List<PointDto> poDesc){
        return session.insert(namespace + "insertPoint", poDesc);
    }

    public int updatePoint(Map<String, Integer> poDesc){
        return session.update(namespace + "updatePoint", poDesc);
    }
}
