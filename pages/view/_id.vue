<template>
  <div>
    <app-modal-dialog :film="{}" />
  </div>
</template>

<script>
import AppModalDialog from '@/components/layouts/AppModalDialog'
export default {
  name: 'ViewIdPages',
  components: {
    AppModalDialog
  }
}
</script>
