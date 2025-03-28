<script lang="ts" setup>
import { useService } from '@/composables'
import { useDialog } from '@/composables/dialog'
import { kInstance } from '@/composables/instance'
import { kInstanceModsContext } from '@/composables/instanceMods'
import { vSharedTooltip } from '@/directives/sharedTooltip'
import { injection } from '@/util/inject'
import { ModFile } from '@/util/mod'
import { InstanceModsServiceKey } from '@xmcl/runtime-api'
import { set } from 'vue'

const { isShown } = useDialog('mod-duplicated')
const { conflicted } = injection(kInstanceModsContext)

const items = computed(() => {
  const items = [] as (string | ModFile)[]

  for (const [modId, mods] of Object.entries(conflicted.value)) {
    items.push(modId)
    items.push(...mods)
  }

  return items
})

function selectDefault(files: ModFile[]) {
  return files.toSorted((a, b) => !a.enabled ? 1 : b.mtime - a.mtime)[0]
}

function selectDefaults(all: Record<string, ModFile[]> ) {
  const newOmitted = {} as Record<string, ModFile>
  for (const i of Object.entries(all)) {
    const [modId, files] = i
    newOmitted[modId] = selectDefault(files)
  }
  omitted.value = newOmitted
}

watch(conflicted, (all) => {
  selectDefaults(all)
})

const omitted = ref({} as Record<string, ModFile>)
const onSelect = (item: ModFile) => {
  set(omitted.value, item.modId, item)
}

const { t } = useI18n()

const { uninstall } = useService(InstanceModsServiceKey)
const { path } = injection(kInstance)
function process() {
  const omittedSet = new Set(Object.values(omitted.value))
  const paths = [] as string[]
  for (const i of items.value) {
    if (typeof i === 'string') continue
    if (!omittedSet.has(i)) {
      paths.push(i.path)
    }
  }
  console.log('Uninstall ' + paths.join(', '))
  uninstall({ mods: paths, path: path.value })
  isShown.value = false
}

const { push, currentRoute } = useRouter()

function view(modId: string) {
  const all = conflicted.value[modId]
  for (const file of all) {
    const modrinthId = file.modrinth?.projectId
    const curseforgeId = file.curseforge?.projectId
    const name = file.name
    const id = modrinthId || curseforgeId || name
    push({ query: { ...currentRoute.query, id: id.toString() } })
    isShown.value = false
    return
  }
}

</script>

<template>
  <v-dialog
    v-model="isShown"
    width="800"
  >
    <v-card class="flex flex-col overflow-auto visible-scroll max-h-[90vh]">
      <v-card-title>{{ t('mod.duplicatedDetected', { count: Object.keys(conflicted).length }) }}</v-card-title>
      <v-card-text class="overflow-auto max-h-full">
        {{ t('mod.duplicatedDetectedDescription') }}

        <v-list
          dense
          nav
          class="overflow-auto"
        >
          <template v-for="(item, i) of items">
            <v-subheader
              v-if="typeof item === 'string'"
              :key="item + i"
            >
              {{ item }}
              <v-spacer />
              <v-btn
                text
                small
                @click="view(item)"
              >
                <v-icon small>
                  arrow_forward
                </v-icon>
              </v-btn>
            </v-subheader>
            <v-list-item
              v-else
              :key="item.fileName + i"
              :style="{
                textDecoration: omitted[item.modId] === item ? '' : 'line-through'
              }"
              @click="onSelect(item)"
            >
              <v-list-item-action>
                <v-simple-checkbox
                  :value="omitted[item.modId] === item"
                  :input-value="omitted[item.modId] === item"
                  readonly
                  @click="onSelect(item)"
                />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.fileName }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.version }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
        v-shared-tooltip="t('filter')"
          icon 
          @click="selectDefaults(conflicted)"
        >
          <v-icon>filter_alt</v-icon>
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="process"
        >
          {{ t('shared.keepSelected') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
