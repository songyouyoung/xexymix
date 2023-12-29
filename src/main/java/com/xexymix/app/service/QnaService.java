package com.xexymix.app.service;

import com.xexymix.app.dao.QnaDao;
import com.xexymix.app.dao.UserDao;
import com.xexymix.app.domain.QnaDto;
import com.xexymix.app.domain.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class QnaService {
    @Autowired
    QnaDao qnaDao;
    @Autowired
    UserDao userDao;

//    문의 개수 조회
    public int cntQna(String itemNo){
        return qnaDao.selectQnaCnt(itemNo);
    }

//    전체 문의 조회
    public List<QnaDto> showQna(Map<String, String> qnaDesc){
        return qnaDao.selectQna(qnaDesc);
    }

//    문의 수정
    public int updateQna(QnaDto qnaDesc){
        return qnaDao.updateQna(qnaDesc);
    }

    //    문의 삭제
    public Integer deleteQna(Map<String, Integer> qnaDesc){
        return qnaDao.deleteQna(qnaDesc);
    }

    //    문의 등록
    public String insertQna(QnaDto qnaDesc){
        String error = "";
        // user Name
        UserDto user = userDao.selectUser(qnaDesc.getUserNo());
        error += user == null? "사용자명 찾기 오류, ": "";
        qnaDesc.setUserName(user.getUserName());
        // 문의 isnert
        System.out.println("qnaDesc : " + qnaDesc);
        Integer insert = qnaDao.insertQna(qnaDesc);
        error += insert==null||insert<1? "문의 등록 오류": "";
        System.out.println("error : " + error);
        return error;
    }
}
