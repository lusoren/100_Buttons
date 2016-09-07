for x in range(1,50):
    if(x<26):
        print "-" + str(x*0.01) + "em " + str(x*.014) + "em rgb(" + str(x) +",255," + str(x) + "),"
    else:
        print "-" + str(x*0.01) + "em " + str(x*.014) + "em rgb(255,255,255),"
        
    