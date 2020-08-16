package com.example.crossfittimer;

import android.content.Context;
import android.widget.TextView;

public class HRMonitorView extends TextView {
    public HRMonitorView(Context context) {
        super(context);
    }

    public void updateHR(int hr) {
        this.setText(String.valueOf(hr));
    }
}