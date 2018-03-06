#!/bin/bash

tracker_url="https://script.google.com/macros/s/AKfycby3hVerD9ysczkdHsgjOYrCalY7R_Kho37iKfhO2LHLy-qb5vqq/exec"

while getopts "hvu:" opt; do
  case ${opt} in
    h ) 
      echo "Usage:"
      echo " $0 -h Display this help message."
      exit 0
      ;;
    v )
      VERBOSE=1
      ;;
    u )
      tracker_url="$OPTARG"
      ;;
    \? )
      exit 1
      ;;
  esac
done

default_iface=$(awk '$2 == 00000000 { print $1 }' /proc/net/route)
default_ip=`ip addr show dev "$default_iface" | grep "inet " | sed 's@ *inet \([0-9\.]*\).*@\1@'`
default_hostname=`hostname`
update_date="`date| sed 's/ /%20/g'`"
ports=`nmap $default_ip | grep " open" | cut -f1 -d"/" | tr "\n" "," || echo "nmap%20 not%20 found"` 2>&1 > /dev/null

params="name=$default_hostname&ip=$default_ip&comment=iface%20$default_iface%20ports:%20$ports&updated=$update_date"
fullurl="$tracker_url?$params"


QUIET="-s"

if [ "$VERBOSE" ]; then
	echo "default_iface: $default_iface"
	echo "default_ip:    $default_ip"
	echo "tracker_url:   $tracker_url"
	echo "fullurl:       $fullurl"
	QUIET=""
fi

curl $QUIET -o /dev/null "$fullurl"
