import  { onErrorCaptured, ref }  from "vue";

export default function errorState() {
    const error = ref(null) ;
    
    function setError(error: any){
        error.value = error;
    }
  return { error, setError}
  }
  