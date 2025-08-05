<template>
  <section class="mb-5 mt-2 about mx-6">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ t('setting.about') }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card flat class="mb-6 card">
            <div>
              <v-card-title class="w-full flex mr-2 title">
                <v-img src="http://launcher/icons/logoDark" alt="FMCL Logo" max-width="64" class="mr-4"></v-img>
                <div>
                  <div class="text-h5">Flame Launcher</div>
                  <div class="pt-1 text-body-2">
                    UPI: <span class="font-bold">aislx@ibl</span>
                  </div>
                </div>
                <v-spacer />
                <div>
                  <div class="flex items-center justify-center flex-grow-0 gap-2">
                    <v-icon color="primary">verified</v-icon>
                    <div class="text-caption">MIT LICENSE</div>
                  </div>
                </div>
              </v-card-title>

              <v-textarea filled readonly class="px-4" :value="debugInfo" />
            </div>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script lang="ts" setup>
import { kEnvironment } from '@/composables/environment'
import { injection } from '@/util/inject'
import { kFlights } from '@/composables/flights'

const env = injection(kEnvironment)
const flights = injection(kFlights)

const debugInfo = computed(() => {
  return JSON.stringify({ ...env.value, flights }, null, 2)
})

const { t } = useI18n()
const version = computed(() => env.value?.version ?? '')
</script>

<style scoped>
@media (min-width: 1660px) {
  .about {
    grid-column: span 2 / span 2;
  }

  .card {
    gap: 2rem;
    @apply grid grid-cols-2;
  }

  .sponsors {
    @apply col-span-2;
  }
}
</style>
