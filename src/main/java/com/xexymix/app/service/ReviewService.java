package com.xexymix.app.service;

import com.xexymix.app.dao.PointDao;
import com.xexymix.app.dao.ReviewDao;
import com.xexymix.app.domain.PointDto;
import com.xexymix.app.domain.ReviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReviewService {
    @Autowired
    ReviewDao reviewDao;
    @Autowired
    PointDao pointDao;

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

    public int updateRev(ReviewDto revDesc) {
        return reviewDao.updateRev(revDesc);
    }

    public ReviewDto selectBuyRev(int buyAuto) {
        return reviewDao.selectBuyRev(buyAuto);
    }

    public String insertRev(ReviewDto revDesc) {
        String error = "";
        // 리뷰 작성
        error = reviewDao.insertRev(revDesc) > 0 ? "": "리뷰 작성 오류, ";
        // 작성한 리뷰 번호 가져오기
        revDesc.setRevNo(reviewDao.selectBuyRevNo(revDesc.getBuyAuto()));
        error += revDesc.getRevNo() > 0 ? "": "리뷰 번호 불러오기 오류, ";
        // buy테이블 revNo 업데이트
        error += reviewDao.updateBuyRev(revDesc) > 0 ? "": "buy테이블 revNo update 오류, ";
        // point 적립
        List<PointDto> poDesc = new ArrayList<>();
        PointDto point = new PointDto();
        point.setBuyNo(revDesc.getBuyNo());
        point.setRevNo(revDesc.getRevNo());
        point.setItemNo(revDesc.getItemNo());
        point.setUserNo(revDesc.getUserNo());
        point.setPoint(revDesc.getRevFile() == null? 50: 150);
        point.setPoTxt("리뷰 작성에 대한 적립");
        System.out.println(point);
        poDesc.add(point);
        error += pointDao.insertPoint(poDesc) > 0? "": "point 적립 오류, ";
        // 유저 적립금 업데이트
        Map<String, Integer> userPo = new HashMap<>();
        userPo.put("point", point.getPoint());
        userPo.put("userNo", point.getUserNo());
        error += pointDao.updatePoint(userPo) > 0? "": "유저 point 업데이트 오류";
        return error;
    }

    public String deleteRev(ReviewDto revDesc) {
        String error = "";
        // 리뷰 삭제
        error = reviewDao.deleteRev(revDesc.getRevNo()) > 0 ? "": "리뷰 삭제 오류, ";
        // buy테이블 revNo 업데이트
        error += reviewDao.updateBuyRev(revDesc) > 0 ? "": "buy테이블 revNo update 오류, ";
        // point 적립
        List<PointDto> poDesc = new ArrayList<>();
        PointDto point = new PointDto();
        point.setBuyNo(revDesc.getBuyNo());
        point.setRevNo(revDesc.getRevNo());
        point.setItemNo(revDesc.getItemNo());
        point.setUserNo(revDesc.getUserNo());
        point.setPoint(revDesc.getRevFile() == null? 50: 150);
        point.setPoTxt("리뷰 작성에 대한 적립");
        System.out.println(point);
        poDesc.add(point);
        error += pointDao.insertPoint(poDesc) > 0? "": "point 적립 오류, ";
        // 유저 적립금 업데이트
        Map<String, Integer> userPo = new HashMap<>();
        userPo.put("point", point.getPoint());
        userPo.put("userNo", point.getUserNo());
        error += pointDao.updatePoint(userPo) > 0? "": "유저 point 업데이트 오류";
        return error;
    }
}
