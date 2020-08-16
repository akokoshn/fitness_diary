package com.example.crossfittimer;

import com.example.crossfittimer.HRMonitor;
import com.example.crossfittimer.HRMonitorView;

public class Presenter {
    private HRMonitor hrm;
    private HRMonitorView hrm_view;

    public Presenter() {

    }

    public void updateHR() {
        hrm_view.updateHR(hrm.getHR());
    }
}
