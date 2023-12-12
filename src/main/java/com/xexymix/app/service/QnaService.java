package com.xexymix.app.service;

import com.xexymix.app.dao.QnaDao;
import com.xexymix.app.domain.QnaDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class QnaService {
    @Autowired
    QnaDao qnaDao;

///////////////////
//    문의 개수 조회
///////////////////
    public int cntQna(String itemNo){
        return qnaDao.selectQnaCnt(itemNo);
    }

///////////////////
//    전체 문의 조회
///////////////////
    public List<QnaDto> showQna(Map<String, String> qnaDesc){
        return qnaDao.selectQna(qnaDesc);
    }

///////////////////
//    문의 수정
///////////////////
    public int updateQna(QnaDto qnaDesc){

    return qnaDao.updateQna(qnaDesc);
}
}
