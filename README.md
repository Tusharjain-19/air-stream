
# AirStream – Offline In-Flight Entertainment System

AirStream is a simple offline In-Flight Entertainment (IFE) system.
It lets people watch movies, listen to music, read PDFs, or play games **without using the internet**.

Instead of the internet, AirStream uses:

##----a laptop as a local server-----##
a Wi-Fi hotspot
and a web browser on the user’s phone

This is similar to how real airline entertainment systems work.

---


##---- What You Need Before Starting ----##

You only need:

A laptop (Windows recommended)
A mobile phone
Basic internet (only to turn on hotspot, not for usage) // no use if you use resberryy pi
This project folder downloaded on your laptop


---

## Important Note About Media Files

This GitHub repository **does not contain movies, music, or copyrighted content**.

This is intentional to:

* protect privacy
* avoid copyright problems
* keep the project lightweight

You can add your **own test media files locally** on your laptop.

---

## How AirStream Works (Simple Explanation)

Think of it like this:

* Laptop = aircraft entertainment computer
* Laptop hotspot = inflight Wi-Fi
* Phone = passenger device

The laptop hosts a website.
The phone connects to the laptop’s Wi-Fi and opens that website.
No internet is required after that.

---

# Step-by-Step: Run AirStream Using Laptop as Server

Follow these steps **in order**.

---
## how to run this web app
##Step 1: Download the Project

###-----Option 1: Download ZIP (Easiest)

1. Open the GitHub repository
2. Click **Code → Download ZIP**
3. Extract the ZIP file
4. Open the extracted folder

### ----Option 2: Using Git (Optional)

```bash
git clone https://github.com/Tusharjain-19/air-stream.git
```

---

## Step 2: Install Python (Very Important)

Python is used to run the local server.

### Check if Python is installed

1. Open **Command Prompt**
2. Type:

```bash
python --version
```

If you see a version number, Python is already installed.

### If Python is NOT installed

1. Go to [https://www.python.org](https://www.python.org)
2. Download Python
3. During installation, **check “Add Python to PATH”**
4. Finish installation

---

## Step 3: Add Test Media (Optional but Recommended)

Inside the project folder, add small test files:

```
assets/videos/sample.mp4
assets/audio/sample.mp3
and change the address in html file also to access sample music
```

---

## Step 4: Turn Your Laptop into a Wi-Fi Hotspot

This allows phones to connect to your laptop.

1. Open **Settings**
2. Go to **Network & Internet**
3. Click **Mobile hotspot**
4. Turn it **ON**
5. Set:

   * Network name: `AirStream_WiFi` // abything you like
   * Password: anything you like

Important:

* Windows may require the laptop to be connected to some internet to enable hotspot
* You can connect to your phone hotspot temporarily if needed

---

## Step 5: Find Your Laptop’s IP Address // if your know skip this step 

1. Open **Command Prompt** ( window + r then enter "cmd" )
2. Type:
               ipconfig




Look for this section:

```
Wireless LAN adapter Local Area Connection* 2
IPv4 Address : 192.168.xxx.1
```

Example:

```
192.168.143.1
```

This number is very important.
It is the **address of your AirStream website**.

---

## Step 6: Start the Local Server

1. Open the AirStream project folder
2. Click the address bar
3. Type `cmd` and press Enter
4. In the command window, type:

```bash
          python -m http.server 8000
```

You should see:

```
           Serving HTTP on 0.0.0.0 port 8000
```

## important thing --->   Do **not close this window**.

---

## Step 7: Open AirStream on Your Phone

1. Connect your phone to the laptop Wi-Fi (`AirStream_WiFi`)
2. Open any browser (Chrome, Safari, etc.)
3. Type:

```
http://192.168.143.1:8000         // enter->  http://ip :8000
```

(Use your own IP if it’s different for ip look at step 4 and 5 )

The AirStream website should open.

---

## Step 8: Test Offline Mode (Real In-Flight Simulation)

1. Turn **Airplane Mode ON** on your phone
2. Keep **Wi-Fi ON**
3. Refresh the page

If it still works, AirStream is running fully offline.

---

## Common Problems and Solutions

### Website does not open

* Make sure the server is running
* Check the IP address again
* Use IP, not `localhost`  // both are diffrent

### Phone cannot connect

* Hotspot must be ON
* Laptop and phone must be on the same Wi-Fi

### Videos not playing

* Use `.mp4` format
* Keep file sizes small
* Check correct folder path

---

## Why Laptop Is Used as Server
* good for prototype testing
* Easy for beginners
* No extra hardware needed
* Perfect for demos and learning
* Simulates real aircraft systems

Future versions can move to **Raspberry Pi** for real deployment.

---

## Disclaimer

This project is created for educational and demonstration purposes only.
It is not affiliated with any airline.
