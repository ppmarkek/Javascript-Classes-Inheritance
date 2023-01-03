class IntBuilder{
    constructor(num) {
        this.num = num;
    }
    static random(min, max){return Math.floor(Math.random() * (max - min + 1) ) + min;}
    plus(...n){
        for(let i=0; i<=n.length-1; i=i+1){
            this.num = this.num + n[i];
        }
        console.log(this.num);
        return this;
    }
    minus(...n){
        for(let i=0; i<=n.length-1; i=i+1){
            this.num = this.num - n[i];
        }
        console.log(this.num);
        return this;
    }
    multiply(n){
        this.num = this.num * n;
        console.log(this.num);
        return this;
    }
    divide(n){
        this.num = this.num / n;
        console.log(this.num);
        return this;
    }
    mod(n){
        this.num = this.num % n;
        console.log(this.num);
        return this;
    }
    get(){
        console.log(this.num);
        return this;
    }
}

class StringBuilder{
    constructor(str){
        this.str = str;
    }
    plus(...n){
        this.str = [this.str];
        this.str.push(...n);
        this.str = this.str.join("");
        console.log(this.str);
        return this;
    }
    minus(n){
        this.str = [...this.str];
        for(let i=1; i<=n; i++){
            this.str.pop();
        }
        this.str = this.str.join("");
        console.log(this.str);
        return this;
    }
    multiply(n){
        this.str = [this.str];
        for(let i=1; i<=n-1; i++){
            this.str.push(this.str[0]);
        }
        this.str = this.str.join("");
        console.log(this.str);
        return this;
    }
    divide(n){
        let strlen = this.str.length;
        let k = Math.floor(strlen / n);
        this.str = [...this.str];
        for(let i=1; i<=strlen-n; i++){
            this.str.pop();
        }
        this.str = this.str.join("");
        console.log(this.str);
        return this;
    }
    remove(n){
        this.str = [...this.str];
        const index = this.str.indexOf(n);
        for(let i=0; i<=this.str.length; i++){
            if (index > -1) {
                this.str.splice(index, 1); 
            }
        }
        this.str = this.str.join("");
        console.log(this.str);
        return this;
    }
    sub(from, n){
        this.str = [...this.str];
        this.str = this.str.splice(from, n); 
        this.str = this.str.join("");
        console.log(this.str);
        return this;
    }
    get(){
        console.log(this.str);
        return this;
    }
}
