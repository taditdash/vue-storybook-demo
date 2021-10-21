<template>
  <div class="modal">
    <div class="header" v-if="!hideHeader">
      <template name="header">
        {{ header }}
      </template>
      <span class="close">&times;</span>
    </div>
    <div class="body">
      <p name="body">{{ body }}</p>
    </div>
    <div class="footer">
      <slot name="footer">
        <template v-if="singleButtonText">
          <my-button size="large" primary :label="singleButtonText"></my-button>
        </template>
        <template v-else>
          <my-button secondary label="Cancel"></my-button>
          <my-button size="large" primary label="Save"></my-button>
        </template>
      </slot>
    </div>
  </div>
</template>

<script>
import MyButton from "../stories/Button.vue";

export default {
  name: "RFModal",
  components: {
    MyButton
  },
  props: {
    singleButtonText: {
      type: String
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: "Modal Header"
    },
    body: {
      type: String,
      default: "I am Modal Body"
    }
  },
  methods: {
    // onModalSave() {
    //   this.$emit("on-modal-save");
    // }
  }
};
</script>

<style scoped>
/* The Modal (background) */
/* .modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
} */

/* Modal Content */
.modal .body {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #c5c5c5;
  width: 50%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal .footer {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #c5c5c5;
  border-top: none;
  width: 50%;
  display: flex;
  justify-content: flex-end;
}

.modal .header {
  margin: auto;
  margin-top: 10%;
  padding: 10px;
  border: 1px solid #c5c5c5;
  border-bottom: none;
  width: 50%;
  font-weight: 400;
  font-size: 40px;
}

@media only screen and (max-width: 1200px) {
  /*Tablets [601px -> 1200px]*/
}
@media only screen and (max-width: 600px) {
  /*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px) {
  /*Small smartphones [325px -> 425px]*/
  .modal .header {
    width: 100%;
    margin-top: 35%;
    font-size: 30px;
  }

  .modal .body {
    width: 100%;
  }

  .modal .footer {
    width: 100%;
  }
}
</style>
