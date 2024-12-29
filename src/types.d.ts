import appConfigs from "@/configs/appConfigs";
import { QuillEditor } from "@vueup/vue-quill";

declare module "vue" {
	interface ComponentCustomProperties {
		$appConfigs: typeof appConfigs;
	}
}