---
layout: ../../layouts/BlogPostLayout.astro
title: How to install a Windows Server 2019
date: 2024-08-21T16:19:13.857Z
author: Liam Smets
image:
    src: /images/Liam.png
    alt: Windows Server 2019
description: Do you wanna know how to install a windows server 2019?
draft: false
category: Documentation
---

## Windows Server 2019 Installation guide

### Step 1: Install the ISO File 
Go to [Windows Server 2019 ISO File](https://www.microsoft.com/en-us/evalcenter/download-windows-server-2019) and install the ISO File

Always select English, or choose another language if you prefer.

![ISO File](/images/iso-file.png)

#### What is an ISO?
An ISO file is an archive file that contains an identical copy of data found on an optical disc, like a CD or DVD. 


### Step 2: Create a bootable USB Stick 
We need to boot from the installation media, such as the downloaded ISO file. Download a few virtual machines to see which one works for you. You can choose Hypervisor and boot the ISO on the virtual machine. This should take you to a new screen. If you need hardware, choose an 8 GB memory stick. 

### Step 3: Select Language, Keyboard type, and Time Zone 
Choose the language, keyboard and time that you would like to install for your server. 

![Keyboard](/images/keyboard.png)

### Step 4: Install Windows Server 2019 
On the new screen you will want to click Install Now to begin the installation. This may take several minutes or seconds depending on your RAM size. 

![Install Windows 2019](/images/Install-2019.png)

### Step 5: Choose the Windows Operating System 
You need to choose the Windows operating system that works best for you at this stage, depending on our needs. We have four types: 

- Windows Server 2019 Standard Evaluation 

- Windows Server 2019 Standard Evaluation (Desktop Experience)  

- Windows Server 2019 Data Center Evaluation 

- Windows Server 2019 Data Center Evaluation (Desktop Experience) 

The desktop experience version installs the full graphical interface version of the operating system, which is ideal for learning and evaluating Windows Server 2019. The option that does not include the Desktop Experience will install a server-core version of the OS, which doesn't include a GUI, and it is managed using PowerShell or remotely with Windows Admin Center. Learn more about how to install-pip-on-windows 

![Select Windows 2019](/images/selectsystem-2019.png)

### Step 6: Applicable Notices 
Click Next, read the license terms, check the box “I accept the license terms” and click Next again. 

![Notes](/images/notes-2019.png)

### Step 7: Determine Installation Type 
Here, we have two choices, which are Upgrade and Custom. Now, the custom option will allow us to install a new and clean Windows Server 2019, while the Upgrade will help you upgrade the current operating system on your virtual machine. However, we are working with a brand new installation here, so you should choose the Custom option.

![Installation Type](/images/installation-type-2019.png)

### Step 8: Where to install Windows 
At this point, you need to allocate disk space to install the Windows Server 2019 operating system. You can allocate a specified size to house the Windows OS or install it in the currently allocated disk space. However, it is a good idea to house the operating system in a separate partition. For instance, if your server will be a file server, keeping the operating system separate from your user data is best. To do this, click on NEW and specify the space that you need to allocate for your file storage. Make sure you leave at least 60GB available for the Windows Server operating system. Allocate and click APPLY. 

### Step 9: Ready to Install Windows 
Make sure the primary partition is selected, and then click NEXT. Now you should get a screen that says ‘Installing Windows’ with steps like, ‘Copying Windows files’, ‘Getting files ready for installation’, ‘Installing features’, ‘Installing updates’, and ‘Finishing Setup’. Sit back, as this could take a couple of minutes, and restart about two to three times before installation is completed.  

![Space](/images/space-2019.png)

### Step 10: Customize Settings and Enter Your Administrator Password 
Your new screen should have a field to specify your admin password. Your password must meet Windows server complexity requirements. Type in your password and click Finish.

![Settings](/images/settings-2019.png)

### Step 11: Configuring the Server 
At this point, the installation has been completed. It’s time to check for security vulnerabilities and to make sure things like Windows Deployment Services (WDS) Transport Server role were added to the Server Core, Windows Defender Advanced Threat Protection (ATP), and Windows Time Service.    