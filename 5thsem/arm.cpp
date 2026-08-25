#include <bits/stdc++.h>
using namespace std;

int count(int n){
    int c=0;
    while(n>0){
        c++;
        n/=10;
    }
    return c;
}

void armStrong(int lower,int upper,vector<int>&arr){
    
    for(int i=lower;i<=upper;i++){
        int c=count(i);
        int sum=0,temp=i;
        while(temp>0){
            int d=temp%10;
            cout<<i<< " value of "<<d << " and for "<<c<<endl;
            sum+=pow(d,c);
            temp/=10;
        }
        // cout<<sum<<" "<<i<<endl;
        if(sum==i){
            arr.push_back(i);
        }
    }
}

int main() {
	// your code goes here
    int lower,upper;
    cin>>lower;
    cin>>upper;
    vector<int>arr;
    
    armStrong(lower,upper,arr);
    
    if(arr.size()==0){
        cout<<-1<<endl;
    }
    else{
        for(auto a:arr){
            cout<<a<<" ";
        }
    }
    return 0;
}
