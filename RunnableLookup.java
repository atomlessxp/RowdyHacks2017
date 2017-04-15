package com.company;

/**
 * Created by Luke Taylor on 4/15/17.
 */
public class RunnableLookup implements Runnable {
    private Thread t;
    private String tname;
    RunnableLookup(String name) {
        tname = name;
        System.out.println("Creating thread " + tname);
    }

    public void run() {
        try {
            System.out.println(tname + " searching for pw....");
            Thread.sleep(10);
        } catch(InterruptedException e) {
            System.out.println(tname + " interrupted...");
        }
        System.out.println(tname + " found pw val");
    }

    public void start() {
        System.out.println("Starting " + tname);
        if(t == null) {
            t = new Thread(this, tname);
            t.start();
        }
    }
}
