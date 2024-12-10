# picopack-bioec131
PicoPack: a database installer for prominent outbreak-causing enteroviruses reported by the CDC

This database requires the user to have jbrowse2 installed. Here are instructions on how do to so: https://currentprotocols.onlinelibrary.wiley.com/doi/10.1002/cpz1.1120

A critical aspect of this setup process is defining the $APACHE_ROOT path as explained in the tutorial, as this installation requires the $APACHE_ROOT path to be defined prior to running the configuration script.

Once jbrowse2 is successfully installed at $APACHE_ROOT and you've acquired the full-config.sh file from this repository, run the following commands in your temporary directory:
```
chmod +x full-config.sh
./full-config.sh
```

When accessing jbrowse2 via localhost, sequence and annotations for seven enteroviruses should be accessible in any of the sequence views. Multiple sequence view is installed as part of this package, making it easier to compare genomes. If the install is successful, the following synteny tracks should be available in synteny view:

Enterovirus 70,Coxsackievirus A24 <br />
Coxsackievirus A6,Coxsackievirus A16 <br />
Echovirus 13,Echovirus 18 <br />
Echovirus 18,Echovirus 30 <br />
Echovirus 13,Echovirus 30 <br />

If there are any issues seeing these synteny tracks, it may be a cache issue. An option to see these synteny tracks or make other ones is by generating them in the JBrowse2 GUI. These syntenies were included because each virus type led to a similar outbreak. It could be of interest to compare certain sequence components and structures to understand what structural components led to increased virality.

3D protein view is also installed. PDB codes can be inputted to analyze the following enteroviruses:

Enterovirus 70: 7OPX <br />
Coxsackievirus A24: 4Q4V <br />
Coxsackievirus A6: 5YHQ <br />
Coxsackievirus A16: 8X98 <br />
Echovirus 30: 7C9S <br />

The aim of this database installer is to create a resource for researchers to be able to compare prominent enteroviruses in order to be more informed in what characteristics of enteroviruses may make it more dangerous for outbreaks.
