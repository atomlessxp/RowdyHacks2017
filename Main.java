package com.company;
import java.io.*;

public class Main {

    public static void main(String[] args) {
        RandomAccessFile fifo = null;
        try {
            fifo = new RandomAccessFile("/tmp/myfifo", "rw");
        } catch (Exception e) {
            e.printStackTrace();
        }

        String s = "";

        while(true) {
            try {
                s = fifo.readLine();
                RunnableLookup R = new RunnableLookup(s);
                R.start();
            } catch(Exception e) {
                e.printStackTrace();
            }
        }
    }
}
