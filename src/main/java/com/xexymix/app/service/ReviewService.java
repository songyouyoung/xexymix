package com.xexymix.app.service;

import com.xexymix.app.dao.ReviewDao;
import com.xexymix.app.domain.ReviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ReviewService {
    @Autowired
    ReviewDao reviewDao;

///////////////////
//    리뷰 개수 조회
///////////////////
    public int cntReview(String itemNo){
        return reviewDao.selectRevCnt(itemNo);
    }

    ///////////////////
//    리뷰 조회
///////////////////
    public List<ReviewDto> showReview(Map<String, String> revDesc){
        return reviewDao.selectRev(revDesc);
    }

///////////////////
//    리뷰 조회
///////////////////
    public List<ReviewDto> showBestReview(String itemNo){
        return reviewDao.selectRevBest(itemNo);
    }
}
