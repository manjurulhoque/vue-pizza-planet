<template>
    <div class="row">
        <div>
            <div>
                <p>Please login to continue</p>
                <p v-if="currentUser">Logged in as: <br> {{ currentUser.email }}</p>
            </div>
            <form>
                <div v-if="hasError">
                    <p class="text-danger">
                        {{ errorMessage }}
                    </p>  
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter password">
                </div>
                <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
                <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
            </form>
        </div>
  </div>
</template>

<script>
import Firebase from 'firebase';
import {store} from '../store/store.js';

Firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch('setUser', user);
    }else{
        store.dispatch('setUser', null);
    }
})

export default {
    data() {
        return{
            email: '',
            password: '',
            errorMessage: '',
            hasError: false
        }
    },
    computed: {
        currentUser() {
            return this.$store.getters.getCurrentUser;
        }
    },
    methods: {
        signIn() {
            Firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.email, this.password)
                    .then((res) => {
                        console.log(res);
                    }).catch(err => {
                        this.errorMessage = err.message;
                        this.hasError = true;
                    });
        },
        signOut() {
            Firebase.auth().signOut().then(() => alert("Signed out"))
                    .catch(err => console.log(err));
        }
    }
}
</script>

