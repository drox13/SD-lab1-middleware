#curl -I 172.17.0.2:8000 | cat - /home/lab1/SD-lab1/Milldware/server1.txt > temp && mv temp /home/lab1/SD-lab1/Milldware/server1.txt
#curl -I 172.17.0.3:8000 | cat - /home/lab1/SD-lab1/Milldware/server2.txt > temp && mv temp /home/lab1/SD-lab1/Milldware/server2.txt

current_date=$(date)
last_server1_ping=$(curl -s -o /dev/null -w '%{http_code}' 119.18.0.11:9800/status)
last_server2_ping=$(curl -s -o /dev/null -w '%{http_code}' 119.18.0.22:9800/status)
history_server1_ping=$(curl -s -o /dev/null -w '%{http_code}' 172.17.0.2:8000/status)
history_server2_ping=$(curl -s -o /dev/null -w '%{http_code}' 172.17.0.3:8000/status)

# echo "$last_server1_ping $current_date" > /home/lab1/SD-lab1/Milldware/lastLogServer1.log
# echo "$last_server2_ping $current_date" > /home/lab1/SD-lab1/Milldware/lastLogServer2.log
# echo "$history_server1_ping $current_date" >> /home/lab1/SD-lab1/Milldware/historyServer1.log
# echo "$history_server2_ping $current_date" >> /home/lab1/SD-lab1/Milldware/historyServer2.log

echo "$last_server1_ping $current_date" > /home/andres/Documentos/Sistemas-distribuidos/lab1/SD-lab1-middleware/dataLogs/lastLogServer1.log
echo "$last_server2_ping $current_date" > /home/andres/Documentos/Sistemas-distribuidos/lab1/SD-lab1-middleware/dataLogs/lastLogServer2.log
echo "$history_server1_ping $current_date" >> /home/andres/Documentos/Sistemas-distribuidos/lab1/SD-lab1-middleware/dataLogs/historyServer1.log
echo "$history_server2_ping $current_date" >> /home/andres/Documentos/Sistemas-distribuidos/lab1/SD-lab1-middleware/dataLogs/historyServer2.log