<template>
<div>
<div class="kartice" v-for="korisnik in odabir" :key="korisnik.id">
<div class="igraci">
<div class="row">
<div id=userinfo>
<ul id=red>
<router-link :to="{name: 'Profil', params: {imekorisnika: korisnik.id}}"><li><img id="avatar" src="../assets/pplaceholder.jpg"/></li>
<li id="imekor">{{ korisnik.korisnickoime }}</li></router-link>
</ul>
</div>
<div class="column">
<div id=userpodaci>
<li id="pods">Id u igri:{{korisnik.dotagameid}}</li>
<li id="pods">Rank:{{korisnik.dotarank}}</li>
<li id="pods">Pozicija:{{korisnik.dotapos}}</li>
<li id="pods">Regija:{{korisnik.dotaregija}}</li>
</div>
</div>
<div class="column2">
<div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div>

</div>

<div class="column3">
<div id=user>
<li id="dgmd"> <button @click="dotainv(korisnik.id)" type="button" class="btn btn-outline-primary" >Pozovi u tim</button></li>
</div>

</div>

</div>

</div>
</div>
</div>
</template>



<script>
import store from '@/store.js'

export default {

  data(){
    return store
  },

  created(){
    db.collection("Igraci").where("dotalist","==",true).get().then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
if(this.Korisnici.some(kor => kor.id === doc.data().id)==false){
         let korisnik=doc.data()
         korisnik.id=doc.id;
        this.Korisnici.push(korisnik);
        this.tempid=korisnik.id;
}
    });
});
  },
  computed:{
      odabir() {
      return this.Korisnici.filter(korisnik => korisnik.id);
 
    }
    },
    methods: {
      dotainv(k){
        db.collection('Korisnici').doc(k).collection("pozivi").doc(this.userEmail).set({
                    od: this.userEmail,
                    igra: "Dota 2"
                })
      }
    }

}
</script>

<style>

#dgmd{
margin-top: 30%;
padding:50px;
}



#pods{
color:white;
font-size: 20px;
padding:7px;
}

li{
  list-style-type: none;
}


.row{
width:100%;
}


.column {
  padding:35px;
  float: left;
  width: 50%;
}

.column2 {
  padding:60px;
  float: left;
  width: 20%;
}
.column3 {
  padding:0px;
  float: left;
  width: 10%;
}


.row:after {
  content: "";
  display: table;
  clear: both;
}

#userinfo{
margin-top:3%;
position: absolute;
}

#imekor{
position: relative;
font-size: 20px;
color:white;
margin-top:9px;
}

#avatar{
padding:5px;
border-radius: 50%;
height:110px;
}
.igraci{
background: rgb(20, 20, 20);
margin-top: 2%;
width:100vw;
height:240px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>