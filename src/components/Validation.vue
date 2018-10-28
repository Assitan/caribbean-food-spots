<template>
  <v-data-table
    :headers="headers"
    :items="stores"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.address }}</td>
      <td class="text-xs-right">{{ props.item.desc }}</td>
      <td class="text-xs-right">{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.datetime }}</td>
    </template>
  </v-data-table>
</template>

<script>
import stores from '../../srv/api/stores.json';

export default {
    data () {
      return {
        headers: [
          {
            text: 'Nom',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Adresse', sortable: false, value: 'address' },
          { text: 'Description', sortable: false, value: 'desc' },
          { text: 'Email', sortable: false, value: 'email' },
          { text: 'Date', sortable: false, value: 'datetime' },
        ],
      }
    }
  }
</script>
