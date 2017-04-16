package com.company;

import java.io.FileOutputStream;
import java.io.PipedInputStream;

/**
 * Created by Luke Taylor on 4/15/17.
 */
public class RunnableLookup implements Runnable {
    private Thread t;
    private String tname;
    private int time = 0;
    RunnableLookup(String name) {
        tname = name;
        System.out.println("Creating thread " + tname);
    }

    public void run() {
        //try {
            System.out.println(tname + " searching for pw....");
            time = 0;
            Main m = new Main(tname);
            String s = m.toString();
            FileOutputStream fos = null;
            try {
                fos = new FileOutputStream("/tmp/myfifo2");
                System.out.println("Writing to myfifo2");
                //String s="{\"time\": " + time + ", \"cost\": " + tname.length() + " }";
                fos.write(s.getBytes());
                fos.close();
            } catch(Exception e) {
                e.printStackTrace();
            }
        //} /catch(Exception e) {
        //    System.out.println(tname + " interrupted...");
        //}
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
