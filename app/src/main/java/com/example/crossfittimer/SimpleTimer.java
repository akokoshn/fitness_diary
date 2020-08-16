package com.example.crossfittimer;

import androidx.appcompat.app.AppCompatActivity;
import android.view.TextureView;

import android.os.Bundle;

import com.example.crossfittimer.HRMonitorView;

public class SimpleTimer extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_simple_timer);

        HRMonitorView hrm = (HRMonitorView)findViewById(R.id.hr);
        hrm.updateHR(0);
    }
}
