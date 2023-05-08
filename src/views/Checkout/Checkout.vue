<template>
  <main>
    <div v-if="!finishedOrder && !loadingOrder" class="cart-container">
      <div class="cart-header">
        <h2 class="cart-title">Sua sacola</h2>
        <button class="cart-button" @click="toggleCart">
          <span> Ver itens </span>
          <i v-if="!collapsedCart" class="bi bi-caret-down-fill"></i>
          <i v-if="collapsedCart" class="bi bi-caret-up-fill"></i>
        </button>
      </div>
      <div v-if="collapsedCart">
        <div class="cart-item">
          <img src="../../assets/img/3.avif" />
          <div class="cart-item-info">
            <div class="info-section">
              <h3>Camiseta Happy</h3>
              <h4>R$ {{ productPrice.toFixed(2) }}</h4>
            </div>
            <div class="info-section">
              <h4>Quantidade</h4>
              <div class="item-qtd-section">
                <button class="qtd-button" @click="decrementCartQuantity">
                  -
                </button>
                <span>{{ cartQuantity }}</span>
                <button class="qtd-button" @click="incrementCartQuantity">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="cart-price">
        R$ {{ (productPrice * cartQuantity).toFixed(2) }}
      </h3>
    </div>
    <div v-if="!finishedOrder && !loadingOrder" class="checkout-container">
      <h2 class="checkout-title">Finalização do pedido</h2>
      <div class="checkout-form-container">
        <form id="checkout-form" @submit.prevent="checkForm">
          <div class="form-section">
            <span class="form-title">Informações de contato</span>
            <div class="input-container">
              <label for="email" class="form-label">E-mail</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="data.userInfo.email"
              />
              <div class="form-error" v-if="errors.email">
                <span>{{ errors.email }}</span>
              </div>
            </div>
            <div class="input-container">
              <label for="phone" class="form-label">Telefone</label>
              <input
                type="phone"
                class="form-control"
                id="phone"
                v-model="data.userInfo.phone"
                v-maska
                data-maska="(##) #####-####"
              />
              <div class="form-error" v-if="errors.phone">
                <span>{{ errors.phone }}</span>
              </div>
            </div>
          </div>

          <div class="form-section">
            <span class="form-title">Informações de entrega</span>

            <div class="input-container">
              <form @submit.prevent="getAddressByCep">
                <label for="inputEmail" class="form-label">CEP</label>
                <div class="checkout-cep-form">
                  <input
                    type="text"
                    class="form-control"
                    id="cep"
                    v-model="data.deliveryInfo.cep"
                    v-maska
                    data-maska="#####-###"
                  />
                  <button type="submit" class="button-cep">
                    <i v-if="!loadingAddress" class="bi bi-search"></i>
                    <i
                      v-if="loadingAddress"
                      class="spinner-border spinner-border-sm"
                    ></i>
                  </button>
                </div>
                <div class="form-error" v-if="errors.cep">
                  <span>{{ errors.cep }}</span>
                </div>
              </form>
            </div>

            <div class="input-container">
              <label for="street" class="form-label">Rua</label>
              <input
                disabled
                type="text"
                class="form-control"
                id="street"
                v-model="data.deliveryInfo.street"
              />
              <div class="form-error" v-if="errors.street">
                <span>{{ errors.street }}</span>
              </div>
            </div>

            <div class="input-container">
              <label for="number" class="form-label">Número</label>
              <input
                type="number"
                class="form-control"
                id="number"
                v-model="data.deliveryInfo.number"
                :disabled="!validatedCep"
              />
              <div class="form-error" v-if="errors.number">
                <span>{{ errors.number }}</span>
              </div>
            </div>

            <div class="input-container">
              <label for="complement" class="form-label">Complemento</label>
              <input
                type="text"
                class="form-control"
                id="complement"
                v-model="data.deliveryInfo.complement"
                :disabled="!validatedCep"
              />
            </div>

            <div class="input-container">
              <label for="neighborhood" class="form-label">Bairro</label>
              <input
                disabled
                type="text"
                class="form-control"
                id="neighborhood"
                v-model="data.deliveryInfo.neighborhood"
              />
              <div class="form-error" v-if="errors.neighborhood">
                <span>{{ errors.neighborhood }}</span>
              </div>
            </div>

            <div class="input-container">
              <label for="city" class="form-label">Cidade</label>
              <input
                disabled
                type="text"
                class="form-control"
                id="city"
                v-model="data.deliveryInfo.city"
              />
              <div class="form-error" v-if="errors.city">
                <span>{{ errors.city }}</span>
              </div>
            </div>

            <div class="input-container">
              <label for="state" class="form-label">Estado</label>
              <input
                disabled
                type="text"
                class="form-control"
                id="state"
                v-model="data.deliveryInfo.state"
              />
              <div class="form-error" v-if="errors.state">
                <span>{{ errors.state }}</span>
              </div>
            </div>
          </div>

          <div class="form-section">
            <span class="form-title">Informações de pagamento</span>

            <div class="input-container">
              <label for="cardNumber" class="form-label"
                >Número do cartão</label
              >
              <input
                type="text"
                class="form-control"
                id="cardNumber"
                v-model="data.paymentInfo.cardNumber"
                v-maska
                data-maska="#### #### #### ####"
              />
              <div class="form-error" v-if="errors.cardNumber">
                <span>{{ errors.cardNumber }}</span>
              </div>
            </div>

            <div class="input-container">
              <label for="cardHolder" class="form-label"
                >Titular do cartão</label
              >
              <input
                type="text"
                class="form-control"
                id="cardHolder"
                v-model="data.paymentInfo.cardHolder"
              />
              <div class="form-error" v-if="errors.cardHolder">
                <span>{{ errors.cardHolder }}</span>
              </div>
            </div>

            <div class="input-container">
              <label for="expirationDate" class="form-label"
                >Data de vencimento</label
              >
              <input
                type="date"
                class="form-control"
                id="expirationDate"
                v-model="data.paymentInfo.expirationDate"
              />
              <div class="form-error" v-if="errors.expirationDate">
                <span>{{ errors.expirationDate }}</span>
              </div>
            </div>

            <div class="input-container">
              <label for="cvc" class="form-label">CVC</label>
              <input
                type="number"
                class="form-control"
                id="cvc"
                v-model="data.paymentInfo.cvc"
                v-maska
                data-maska="###"
              />
              <div class="form-error" v-if="errors.cvc">
                <span>{{ errors.cvc }}</span>
              </div>
            </div>
          </div>

          <button type="submit" class="btn button-submit">Fechar pedido</button>
        </form>
      </div>
    </div>
    <div v-if="loadingOrder" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-if="finishedOrder" class="finished-order-container">
      <h2>Pedido realizado com sucesso!</h2>
      <a href="/">Retornar à pagina inicial</a>
    </div>
  </main>
</template>

<script>
import { vMaska } from "maska";
import cep from "cep-promise";

import { ref } from "vue";

export const collapsedCart = ref(false);

export const toggleCart = () => {
  collapsedCart.value = !collapsedCart.value;
};

export default {
  name: "Checkout",
  components: {},
  directives: { maska: vMaska },
  setup() {
    return { toggleCart, collapsedCart };
  },
  data() {
    return {
      data: {
        userInfo: {
          email: null,
          phone: null,
        },
        deliveryInfo: {
          cep: null,
          street: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
        },
        paymentInfo: {
          cardNumber: null,
          cardHolder: null,
          expirationDate: null,
          cvc: null,
        },
      },
      errors: {
        email: null,
        phone: null,
        cep: null,
        street: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        cardNumber: null,
        cardHolder: null,
        expirationDate: null,
        cvc: null,
      },
      validatedCep: false,
      loadingAddress: false,
      loadingOrder: false,
      cartQuantity: 1,
      productPrice: 39.9,
      finishedOrder: false,
    };
  },
  methods: {
    async getAddressByCep() {
      this.loadingAddress = true;
      setTimeout(async () => {
        try {
          const data = await cep(this.data.deliveryInfo.cep);
          this.validatedCep = true;
          this.errors["cep"] = null;
          this.data.deliveryInfo.street = data.street;
          this.data.deliveryInfo.neighborhood = data.neighborhood;
          this.data.deliveryInfo.city = data.city;
          this.data.deliveryInfo.state = data.state;
        } catch (err) {
          this.validatedCep = false;
          this.errors["cep"] = "CEP inválido!";
        }
        this.loadingAddress = false;
      }, 500);
    },
    async checkoutOrder() {
      this.loadingOrder = true;
      setTimeout(() => {
        console.log(this.data);
        this.loadingOrder = false;
        this.finishedOrder = true;
      }, 2500);
    },
    checkForm() {
      !this.data.userInfo.email
        ? (this.errors["email"] = "O e-mail é obrigatório!")
        : (this.errors["email"] = null);
      !this.data.userInfo.phone
        ? (this.errors["phone"] = "O telefone é obrigatório!")
        : (this.errors["phone"] = null);
      !this.data.deliveryInfo.cep
        ? (this.errors["cep"] = "O CEP é obrigatório!")
        : (this.errors["cep"] = null);
      !this.data.deliveryInfo.street
        ? (this.errors["street"] = "A rua é obrigatória!")
        : (this.errors["street"] = null);
      !this.data.deliveryInfo.number
        ? (this.errors["number"] = "O número é obrigatório!")
        : (this.errors["number"] = null);
      !this.data.deliveryInfo.neighborhood
        ? (this.errors["neighborhood"] = "O bairro é obrigatório!")
        : (this.errors["neighborhood"] = null);
      !this.data.deliveryInfo.city
        ? (this.errors["city"] = "A cidade é obrigatória!")
        : (this.errors["city"] = null);
      !this.data.deliveryInfo.state
        ? (this.errors["state"] = "O estado é obrigatório!")
        : (this.errors["state"] = null);
      !this.data.paymentInfo.cardNumber
        ? (this.errors["cardNumber"] = "O número do cartão é obrigatório!")
        : (this.errors["cardNumber"] = null);
      !this.data.paymentInfo.cardHolder
        ? (this.errors["cardHolder"] = "O titular do cartão é obrigatório!")
        : (this.errors["cardHolder"] = null);
      !this.data.paymentInfo.expirationDate
        ? (this.errors["expirationDate"] =
            "A data de vencimento é obrigatória!")
        : (this.errors["expirationDate"] = null);
      !this.data.paymentInfo.cvc
        ? (this.errors["cvc"] = "O CVC é obrigatório!")
        : (this.errors["cvc"] = null);

      Object.values(this.errors).forEach((error) => {
        if (error) {
          console.log("por favor corrija os erros!");
          return;
        }
      });

      this.checkoutOrder();
    },
    incrementCartQuantity() {
      this.cartQuantity++;
    },
    decrementCartQuantity() {
      this.cartQuantity > 1 && this.cartQuantity--;
    },
  },
};
</script>

<style lang="less" src="./style.less" scoped />
