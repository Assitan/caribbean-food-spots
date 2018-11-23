<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        fab
        color="teal"
        dark
      >
        <v-icon dark>add</v-icon>
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Ajouter une boutique exotique
        </v-card-title>

        <v-card-text>
          <p>
          Essayez d'être le plus précis possible dans la description
          si vous ne pouvez pas fournir une adresse exacte ou un nom.
          Cela nous permettra de faire des recherches.</p>
          <p>L'adresse email est facultative mais vous permettra d'être notifié
          lors de la publication de la boutique que vous avez soumis.
          Vous recevrez aussi un email si votre ajout n'est pas validé.
          </p>

          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="Nom de la boutique"
            ></v-text-field>
            <v-text-field
              v-model="address"
              :rules="nameRules"
              :counter="40"
              label="Adresse de la boutique"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Votre e-mail (facultatif)"
            ></v-text-field>
            <v-textarea
              name="input-7-1"
              v-model="desc"
              label="Description"
              value="The Woodman set to work at once."
              hint="Hint text"
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="warning"
            flat
            @click="dialog = false"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary"
            flat
          >
            Envoyer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddStore',
  data() {
    return {
      dialog: false,
      valid: false,
      name: '',
      address: '',
      email: '',
      desc: '',
      // nameRules: [
      //   v => v.length <= 10 || 'Name must be less than 10 characters'
      // ],
      // email: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+/.test(v) || 'E-mail must be valid'
      // ],
    };
  },
};
</script>
