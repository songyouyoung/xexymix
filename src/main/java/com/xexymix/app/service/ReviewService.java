package com.xexymix.app.service;

import com.xexymix.app.dao.ReviewDao;
import com.xexymix.app.domain.ReviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
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
//    전체 리뷰 조회
///////////////////
    public List<ReviewDto> showReview(Map<String, String> revDesc){
        return reviewDao.selectRev(revDesc);
    }

///////////////////
//    베스트 리뷰 조회
///////////////////
    public List<ReviewDto> showBestReview(Map<String, String> revDesc){
        return reviewDao.selectRevBest(revDesc);
    }

    public Map<String, Integer> showRevChart(String itemNo){
        Map<String, Integer> revChart = new HashMap<>();
        Map<String, String> revDesc = new HashMap<>();
        revDesc.put("itemNo", itemNo);
        for (int i = 1; i <= 5; i++){
            revDesc.put("revScore", i+"");
            revChart.put("chart"+i, reviewDao.selectRevScore(revDesc));
        }
        return revChart;
    }
}
