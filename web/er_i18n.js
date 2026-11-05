// ER Academy — bilingual UI (English / 中文).
//
// The pack used to be English-only. Every user-visible string of the web UI is
// wrapped in T() (or TF() for strings with placeholders) and translated here.
// Node titles, descriptions, output names and input/widget labels are patched
// on the node definitions (see erLocalizeNodeDef), so switching the language
// also retitles nodes already on the canvas and the ones added afterwards.
//
// Language selection:
//   · ComfyUI Settings → "ER VFX · Language / 语言"
//   · Right-click any ER node → "Language / 语言: ..."
// The choice is persisted in localStorage and applied without a reload.

import { app } from "../../scripts/app.js";

const LS_KEY = "er_vfx_lang";
export const SETTING_ID = "ER_VFX.language";

// --------------------------------------------------------------------------
// English → 中文. Keys are the original English strings (with {placeholders}).
// A namespace can be passed to T() for the few words with two meanings
// (e.g. "Color" as a panel title vs. a grain channel).
// --------------------------------------------------------------------------
const ZH = {
    // ------------------------------------------------------------- shared
    "Toggle before/after": "对比原图／效果",
    "Toggle composite / base": "对比合成／底图",
    "Toggle result / reference (image_1)": "对比结果／参考图（image_1）",
    "Expand/collapse": "展开／折叠",
    "Reset this group": "重置本组",
    "Reset {label}": "重置{label}",
    "{label} (double click: reset)": "{label}（双击重置）",
    "Reset": "重置",
    "Reset all parameters": "重置全部参数",
    "Reset all parameters and wheels": "重置全部参数与色轮",
    "Reset every parameter to its default": "将所有参数恢复为默认值",
    "Reset every band": "重置所有色带",
    "Reset all grain parameters": "重置全部颗粒参数",
    "Reset points and parameters": "重置取色点与参数",
    "Reset lights and parameters": "重置灯光与参数",
    "Controlled by the film preset": "由胶片预设控制",
    "custom": "自定义",
    "skin": "肤色",
    "image": "图像",
    "video": "视频",

    // ------------------------------------------------------------- views
    "Result": "结果",
    "Input": "输入",
    "Ref": "参考",
    "Lights": "光照",
    "Depth": "深度",
    "Normals": "法线",
    "👁 Original": "👁 原图",
    "Hold to see the original image": "按住查看原图",
    "Hold to see the original video": "按住查看原视频",

    // ------------------------------------------------------------- glow
    "Highlights": "高光",
    "Shape": "形状",
    "Color": "颜色",
    "Composite": "合成",
    "Threshold": "阈值",
    "Knee": "膝点（过渡）",
    "Boost": "增强",
    "Extract": "提取方式",
    "Size %": "尺寸 %",
    "Octaves": "倍频层数",
    "Falloff": "衰减",
    "Anamorphic": "变形宽银幕拉伸",
    "Gain": "增益",
    "Gamma": "伽马",
    "Saturation": "饱和度",
    "Tint hue": "染色色相",
    "Tint amount": "染色强度",
    "Dispersion": "色散",
    "Blend": "混合模式",
    "Mix": "混合量",
    "View": "视图",
    "Rec709 luma": "Rec709 亮度",
    "Max RGB": "RGB 最大值",
    "Average": "RGB 平均值",
    "Per channel": "逐通道",
    "Add": "相加",
    "Screen": "滤色",
    "Max": "取最大值",
    "Glow only": "仅辉光",

    // ------------------------------------------------------------- regrain
    "Grain": "胶片颗粒",
    "Amount": "强度",
    "Grain size": "颗粒尺寸",
    "Response": "明暗响应",
    "Seed": "随机种子",
    "regrain|Color": "彩色颗粒",
    "35mm fine (50D)": "35mm 细颗粒（50D）",
    "35mm (250D)": "35mm（250D）",
    "35mm high speed (500T)": "35mm 高速（500T）",
    "super 16mm": "超 16mm",
    "16mm": "16mm",
    "8mm": "8mm",

    // ------------------------------------------------------------- grade
    "⚫ In black": "⚫ 原图黑点",
    "⚪ In white": "⚪ 原图白点",
    "⚫ Ref black": "⚫ 参考黑点",
    "⚪ Ref white": "⚪ 参考白点",
    "Pick the blackpoint on YOUR image": "在原图上取黑场",
    "Pick the whitepoint on YOUR image": "在原图上取白场",
    "Pick the target black on the REFERENCE image": "在参考图上取目标黑场",
    "Pick the target white on the REFERENCE image": "在参考图上取目标白场",
    "The graded output image": "调色后的输出图像",
    "Your ORIGINAL image, untouched (where In black/white pick)": "你的原始图像（未处理，供原图黑/白点取色）",
    "The reference image (where Ref black/white pick)": "参考图像（供参考黑/白点取色）",
    "Click the DARKEST area of your ORIGINAL image (shown untouched)": "点击原图中最暗的区域（显示为未处理版本）",
    "Click the BRIGHTEST area of your ORIGINAL image (shown untouched)": "点击原图中最亮的区域（显示为未处理版本）",
    "Click the DARKEST area of the reference": "点击参考图中最暗的区域",
    "Click the BRIGHTEST area of the reference": "点击参考图中最亮的区域",
    "No reference loaded: connect an image to the 'reference' input (it loads instantly from a Load Image) or run the workflow once.":
        "未加载参考图：将图像连接到 “reference” 输入（从“加载图像”节点连接可即时读取），或运行一次工作流。",

    // ------------------------------------------------------------- combine
    "normal": "正常",
    "add": "相加",
    "screen": "滤色",
    "multiply": "正片叠底",
    "overlay": "叠加",
    "soft light": "柔光",
    "difference": "差值",
    "lighten": "变亮",
    "darken": "变暗",
    "Connect layers to stack them over the base.": "连接图层，将它们叠加到底图上。",

    // ------------------------------------------------------------- relighting
    "＋ Light": "＋ 灯光",
    "Add a point light": "添加一盏点光",
    "View: {mode}": "视图：{mode}",
    "Cycle view: result / depth / normals": "切换视图：结果 / 深度 / 法线",
    "Int": "强度",
    "Intensity": "强度",
    "Rad": "半径",
    "Attenuation radius": "衰减半径",
    "Z": "高度",
    "Light height above the image": "灯光在画面上方的高度",
    "Light color": "灯光颜色",
    "Delete this light": "删除此灯光",
    "L{n}": "灯{n}",
    "Select this light": "选择此灯光",
    "Light {n} (drag to move)": "灯光 {n}（拖动移动）",

    // ------------------------------------------------------------- color correct
    "Balance": "平衡",
    "Temp (K)": "色温 (K)",
    "Hue": "色相",
    "Tone": "影调",
    "Contrast": "对比度",
    "Offset": "偏移",
    "Shadows": "阴影",
    "Midtones": "中间调",
    "{label}: drag to tint, double click to reset": "{label}：拖动染色，双击重置",
    "Wheels": "色轮",
    "Vectorscope": "矢量示波器",
    "corrected trace · skin tone line": "校正后轨迹 · 肤色线",
    "Secondaries": "二级调色",
    "isolate reds, blues…": "单独调整红、蓝…",
    "👁 Mask": "👁 遮罩",
    "Preview the isolated band as a mask (white = affected)": "将隔离色带作为遮罩预览（白色 = 受影响区域）",
    "R": "红",
    "Yl": "黄",
    "G": "绿",
    "Cy": "青",
    "B": "蓝",
    "Mg": "品红",
    "{name} band ({deg}°)": "{name} 色带（{deg}°）",
    "Hue shift": "色相偏移",
    "Luminance": "亮度",
    "{label} of the selected band (double click: reset)": "所选色带的{label}（双击重置）",

    // ------------------------------------------------------------- video
    "A · generated": "A · 生成",
    "B · reference": "B · 参考",
    "ER Video Color Correct": "ER 视频调色",
    "WebGL is not available; the live preview cannot run.": "WebGL 不可用，实时预览无法运行。",

    // ------------------------------------------------------------- lens effects
    "Distortion": "畸变",
    "Fine (k2)": "精细 (k2)",
    "Chromatic ab.": "色差",
    "Vignette": "暗角",
    "Softness": "柔和度",
    "Center X": "中心 X",
    "Center Y": "中心 Y",
    "Sharpen & Glow": "锐化与辉光",
    "Sharpen": "锐化",
    "Glow": "辉光",
    "Optics": "光学",
    "Corner soft": "边角柔化",
    "Diffusion": "柔光扩散",
    "Halation": "晕光",
    "Dirt": "脏污",
    "Size": "尺寸",
    "Density": "密度",
    "Smudges": "污渍",
    "Reveal": "显现",
    "Base vis.": "基础可见度",
    "Tint sat": "染色饱和度",
    "Lens": "镜头",
    "Radius %": "半径 %",
    "Blades": "光圈叶片",
    "Blade rot.": "叶片旋转",
    "Bokeh": "焦外（Bokeh）",
    "Highlight boost": "高光增强",
    "Chromatic fringe": "彩色边缘",
    "Core": "核心",
    "Core radius": "核心半径",
    "Scale": "缩放",
    "Sat": "饱和度",
    "Ghost angle": "鬼影角度",
    "Ghosts": "鬼影",
    "Streak": "拉丝",
    "Streak hue": "拉丝色相",
    "Streak width": "拉丝宽度",
    "Rays": "星芒",
    "Ray count": "星芒数量",
    "Ray angle": "星芒角度",
    "Show/hide the light markers": "显示／隐藏灯光标记",
    "＋ Flare": "＋ 光晕",
    "Add a lens flare (max {max})": "添加一个镜头光晕（最多 {max} 个）",
    "⟲ All": "⟲ 全部",
    "Reset every flare's parameters (keeps positions)": "重置所有光晕的参数（保留位置）",
    "Flare {n}": "光晕 {n}",
    "Enable/disable this flare": "启用／禁用此光晕",
    "Reset this flare (keeps its position)": "重置此光晕（保留位置）",
    "Flare look preset — fills the values, everything stays editable": "光晕风格预设 — 填充参数，仍可自由调整",
    "Duplicate this flare (same settings, nudged position)": "复制此光晕（相同参数，位置稍偏移）",
    "Duplicate this flare (max {max} reached)": "复制此光晕（已达到最多 {max} 个）",
    "Delete this flare": "删除此光晕",
    "Aim Flare {n}'s ghost trail (0 = natural light-to-center axis)": "调整光晕 {n} 的鬼影方向（0 = 光源到画面的自然轴线）",
    "presets fill values — everything stays editable": "预设会填充参数 — 仍可自由调整",
    "⟲ Reset all": "⟲ 全部重置",
    "anamorphic blue": "变形宽银幕蓝",
    "vintage prime": "复古定焦",
    "70s zoom ghosts": "70 年代变焦鬼影",
    "golden sun": "金色太阳",
    "clean modern": "干净现代",
    "sci-fi streak": "科幻拉丝",
    "night sodium": "夜间钠灯",
    "car headlight": "汽车大灯",
    "modern prime": "现代定焦",
    "vintage anamorphic": "复古变形宽银幕",
    "fisheye": "鱼眼",
    "smartphone": "手机镜头",
    "dreamy diffusion": "梦幻柔光",
    "old film": "老胶片",

    // ------------------------------------------------------------- editgen
    "⛓ latent": "⛓ 潜空间",
    "Show the latent input, to chain another ER EditGen without going through the VAE":
        "显示潜空间输入，可串联另一个 ER EditGen 而不经过 VAE",
    "Add one or more LoRAs, loaded internally (empty list = none)": "添加一个或多个 LoRA（在节点内加载，空列表 = 不使用）",
    "Model, seed, steps and other settings": "模型、种子、步数及其他设置",
    "Expand / shrink the prompt box": "展开／收起提示词框",
    "▶ Generate": "▶ 生成",
    "Run this workflow": "运行此工作流",
    "Describe the edit or the image to generate...": "描述要进行的编辑或要生成的图像…",
    "queued…": "已排队…",
    "sampling {p}%": "采样中 {p}%",
    "models adopted from this workflow": "已采用当前工作流的模型设置",
    "open ⚙ and pick your model": "打开 ⚙ 选择你的模型",
    "— pick a LoRA —": "— 选择一个 LoRA —",
    "Strength": "强度",
    "Remove this LoRA": "移除此 LoRA",
    "＋ Add LoRA": "＋ 添加 LoRA",
    "Reference image {n}": "参考图 {n}",
    "Chained from another ER EditGen — no VAE round-trip": "已从另一个 ER EditGen 串联 — 无 VAE 往返",

    // ------------------------------------------------------------- auto resolution
    "(auto)": "（自动）",
    "auto (run once)": "自动（运行一次）",

    // ------------------------------------------------------------- wedge sequencer
    "click: open full size": "单击：查看原尺寸",
    "click: copy path": "单击：复制路径",
    "Wedge {n}": "变体 {n}",
    "＋ Wedge": "＋ 变体",
    "Add a wedge: one run (or several) with its own parameter values": "添加一个变体：一次（或多次）运行，使用各自的参数值",
    "▶ Run wedges": "▶ 运行变体",
    "Run every wedge in order": "按顺序运行所有变体",
    "Clear results": "清除结果",
    "values  |  7,7.5,8  |  rand3": "数值  |  7,7.5,8  |  rand3",
    "Remove this parameter": "移除此参数",
    "★ samplers (upstream)": "★ 采样器（上游）",
    "upstream": "上游节点",
    "other nodes": "其他节点",
    "＋ param": "＋ 参数",
    "Add a parameter to this wedge": "为此变体添加参数",
    "Duplicate this wedge": "复制此变体",
    "Remove this wedge": "移除此变体",
    "add at least one wedge with a param and values": "请至少添加一个带参数和数值的变体",
    "too many runs ({n}), max {max}": "运行次数过多（{n}），最多 {max} 次",
    "⏳ queueing...": "⏳ 排队中…",
    "queued {i}/{n}": "已排队 {i}/{n}",
    "results: {n}": "结果：{n}",
    "results: {n} · waiting: {m}": "结果：{n} · 等待中：{m}",
    "(manual run)": "（手动运行）",
    "building contact sheet...": "正在生成联系表…",
    "no results to export": "没有可导出的结果",
    "save failed: {error}": "保存失败：{error}",
    "saved: {path}": "已保存：{path}",
    "Contact sheet title": "联系表标题",
    "🖼 Save contact sheet (all results)": "🖼 保存联系表（全部结果）",
    "All wedge sequencers": "全部变体序列器",
    "No {kind} results yet — run a wedge sequencer to populate this preview.":
        "还没有{kind}结果 — 运行一个变体序列器来填充此预览。",
    "{n} results": "{n} 个结果",
    "Sheet title (e.g. Anime characters)": "联系表标题（例如：动漫角色）",
    "Sheet folder (empty = download)": "保存文件夹（留空 = 下载）",
    "Where to save the contact sheet. Empty = browser download.": "联系表保存位置。留空 = 浏览器下载。",
    "🖼 Contact sheet": "🖼 联系表",
    "Save one PNG with every result and its values": "将所有结果及其参数值保存为一张 PNG",
    "ER WEDGES": "ER 变体",
    "ER Tools · {n} results · {date}": "ER 工具 · {n} 个结果 · {date}",
};

// --------------------------------------------------------------------------
// Per-node metadata (Chinese only; the English side is captured from the
// node definitions coming from the Python side, so nothing is duplicated).
// --------------------------------------------------------------------------
const NODE_INFO = {};

registerNodeInfo("ERAutoResolution", {
    title: "ER 自动分辨率",
    desc: "按所选模型（SD 1.5、SDXL、FLUX、Qwen…）与宽高比，将图像缩放到最适合的分辨率，无需手动计算。输出图像以及供空白潜空间使用的宽/高。",
    widgets: { model: "模型", aspect_ratio: "宽高比", mode: "模式" },
    outputs: { image: "图像", width: "宽度", height: "高度" },
    tooltips: {
        mode: "crop：填满画面并居中裁剪 | pad：完整显示并加黑边 | stretch：拉伸以填满",
    },
});

registerNodeInfo("ERBatchSequencer", {
    title: "ER 变体序列器",
    desc: "VFX 风格的变体序列器（类似 Houdini 的 wedging）：连接任意节点的任意控件（种子、CFG、步数…），定义数值列表或范围，批量运行所有变体，并将结果（图像或视频）与其参数值并排对比。",
    outputs: { images: "图像" },
});

registerNodeInfo("ERBatchSequencerVideo", {
    title: "ER 变体序列器（视频）",
    desc: "用于视频输入（Create Video、LTX、Wan…）的 VFX 风格变体序列器：连接任意节点的任意控件，定义数值列表或范围，批量运行所有变体，并将生成的视频与其参数值并排对比。视频会原样传递。",
    outputs: { video: "视频" },
});

registerNodeInfo("ERWedgePreview", {
    title: "ER 变体预览（图像）",
    desc: "面向客户展示的图像结果画廊：实时汇总工作流中 ER 变体序列器产生的所有图像，按变体分组并标注（变体 1、变体 2…）及各自的参数值。可自定义标题，并导出为单张联系表 PNG。",
});

registerNodeInfo("ERWedgePreviewVideo", {
    title: "ER 变体预览（视频）",
    desc: "面向客户展示的视频结果画廊：实时汇总工作流中 ER 变体序列器产生的所有视频，按变体分组并标注各自的参数值（画廊中的视频会自动播放）。可自定义标题，并导出包含每个视频首帧的联系表 PNG。",
});

registerNodeInfo("ERColorCorrect", {
    title: "ER 色彩校正",
    desc: "带实时预览的调色：色温（开尔文）、色相、饱和度、对比度、伽马、增益、偏移，阴影/中间调/高光色轮，按色相带分离的二级调色（可单独调整红、蓝等颜色并预览遮罩），以及带肤色线的矢量示波器。可实时调整，运行后输出完整质量。",
    outputs: { images: "图像" },
});

registerNodeInfo("ERCombine", {
    title: "ER 图层合成",
    desc: "图层合成：最多将 4 个图层叠加到底图上，每个图层拥有独立的混合模式（正常、相加、滤色、正片叠底、叠加、柔光、差值、变亮、变暗）和不透明度，并带实时预览。连接上一个图层后会自动出现下一个图层输入。RGBA 图层（如 ER 系列的 *_layer_alpha 输出）按各自的逐像素 alpha 合成；黑底上的 RGB 光效图层使用相加或滤色效果最佳。",
    outputs: { images: "图像" },
    tooltips: {
        base: "底层图像：图层将叠加在它上面。",
        layer_1: "图层 1：叠加在前一层的结果之上。RGBA 图层使用自身的 alpha。",
        layer_2: "图层 2：叠加在前一层的结果之上。RGBA 图层使用自身的 alpha。",
        layer_3: "图层 3：叠加在前一层的结果之上。RGBA 图层使用自身的 alpha。",
        layer_4: "图层 4：叠加在前一层的结果之上。RGBA 图层使用自身的 alpha。",
    },
});

registerNodeInfo("EREditGen", {
    title: "ER 生成式编辑",
    desc: "单节点多参考图生成式编辑，适用于接收参考潜空间的编辑模型（FLUX.2 klein、FLUX.1 Kontext、Qwen-Image-Edit…）。在节点内直接选择模型、文本编码器和 VAE（无需连接加载器节点），最多接入 8 张参考图（填满一张后自动出现下一个图像槽）并输入提示词；节点会处理缩放、VAE 编码、正/负条件的参考链、模型自身的噪声调度与采样。潜空间输出可接到下一个 ER EditGen 的潜空间输入，从而一轮接一轮地继续编辑，而无需反复解码与重新编码（避免画质损失）。",
    widgets: {
        unet_name: "扩散模型",
        clip_name: "文本编码器",
        clip_type: "编码器类型",
        vae_name: "VAE",
        text: "提示词",
        seed: "随机种子",
        steps: "步数",
        cfg: "CFG",
        megapixels: "百万像素",
        denoise: "降噪强度",
        weight_dtype: "权重精度",
        sampler_name: "采样器",
        scheduler: "调度器",
        preserve: "编辑锁定",
        width: "宽度",
        height: "高度",
    },
    outputs: { images: "图像", latent: "潜空间" },
    tooltips: {
        unet_name: "扩散模型。留空则使用 model 输入。",
        clip_name: "文本编码器。留空则使用 clip 输入。",
        clip_type: "文本编码器系列：FLUX.2 klein 使用 flux2。",
        vae_name: "VAE。留空则使用 vae 输入。",
        text: "要生成的内容，或如何编辑参考图像。",
        steps: "蒸馏模型用 4（FLUX.2 klein 蒸馏版），基础模型用 20–28。",
        cfg: "蒸馏模型用 1.0。高于 1.0 时会同时计算负面采样（更慢）。",
        megapixels: "工作分辨率：参考图会缩放到此值，输出与第一张参考图一致。",
        denoise: "1.0 = 从头生成。低于 1.0 时改为对已连接的潜空间进行细化（无 VAE 往返）。",
        latent: "另一个 ER EditGen 的结果：作为参考使用，不会重新编码（无画质损失）。",
        mask: "局部重绘遮罩：白色 = 需要重新生成的区域，黑色 = 保持不变。作用于 image_1（或串联的潜空间）之上。",
        preserve: "编辑锁定：让未编辑区域相对源潜空间/图像保持逐位一致。auto = 检测实际变化区域并回填其余部分（编辑为全局时跳过）；strong = 更严格的检测；off = 原始模型输出。",
        width: "0 = 与第一张参考图相同（无参考图时为 1024）。",
    },
});

registerNodeInfo("ERGlow", {
    title: "ER 辉光",
    desc: "带实时预览的高级 GPU 辉光/泛光：软膝高光提取（亮度、最大值、平均值或逐通道）、多倍频光学衰减、变形宽银幕拉伸、辉光伽马/饱和度/染色与色散、相加/滤色/最大值混合、混合量，以及结果/仅辉光/高光视图。适用于图像与帧序列（视频）。",
    outputs: { images: "图像", glow_layer: "辉光层", glow_layer_alpha: "辉光层（透明）" },
    outputTooltips: [
        "应用辉光后的图像。",
        "纯黑背景上的辉光（RGB）：在合成软件中用相加/滤色叠加，或作为编辑模型（klein、nano banana）的干净输入（这些模型不接受 alpha）。",
        "带 alpha 的辉光（RGBA，alpha = 亮度）：用于正常混合合成。不要把它接到编辑模型上。",
    ],
});

registerNodeInfo("ERGrade", {
    title: "ER 调色匹配",
    desc: "带黑白场匹配取色器和实时预览的调色节点：在图像上采样黑场/白场，并在参考图上选取目标黑/白，将两者匹配；此外提供乘法、偏移与伽马控制。运行后输出完整质量。",
    widgets: { multiply: "乘法", offset: "偏移", gamma: "伽马" },
    outputs: { images: "图像" },
    tooltips: {
        reference: "用于匹配的参考图：用参考取色器选取它的黑场/白场",
    },
});

registerNodeInfo("ERLensEffects", {
    title: "ER 镜头效果",
    desc: "带实时预览的 GPU 镜头效果：摄影级 Brown-Conrady 畸变（k1+k2）、色差、可移动暗角、锐化、高光辉光、边角柔化、柔光扩散与晕光，并提供镜头类型预设作为起点填充参数。",
    outputs: { images: "图像" },
});

registerNodeInfo("ERLensFlare", {
    title: "ER 镜头光晕",
    desc: "带实时预览的程序化 GPU 镜头光晕：最多 4 个独立光晕（光晕 1、2…），每个都有可拖动的位置标记和鬼影角度手柄，用于指定鬼影拖尾的方向（拉丝始终保持直线）、独立染色、核心增益/半径、鬼影、可自定义颜色的变形拉丝、可设置数量与角度的星芒，以及启用/禁用开关。以滤色方式叠加。flare_layer 只输出纯黑背景上的光晕，可直接作为合成通道或其他模型的输入。",
    outputs: { images: "图像", flare_layer: "光晕层", flare_layer_alpha: "光晕层（透明）" },
    outputTooltips: [
        "已将光晕滤色叠加的图像。",
        "纯黑背景上的光晕（RGB）：在合成软件中用相加/滤色叠加，或作为编辑模型（klein、nano banana）的干净输入（这些模型不接受 alpha）。",
        "带 alpha 的光晕（RGBA，alpha = 亮度）：用于正常混合合成。不要把它接到编辑模型上。",
    ],
});

registerNodeInfo("ERLensCameraDirt", {
    title: "ER 镜头脏污",
    desc: "带实时预览的程序化 GPU 镜头脏污：灰尘颗粒和污渍会在画面高光下显现，如同真实镜头前组上的脏污。由种子确定，可调尺寸、密度、柔和度、染色和高光显现。dirt_layer 只输出纯黑背景上的脏污，可直接作为合成通道使用。",
    outputs: { images: "图像", dirt_layer: "脏污层", dirt_layer_alpha: "脏污层（透明）" },
    outputTooltips: [
        "高光显现镜头脏污后的图像。",
        "纯黑背景上的脏污（RGB）：用于相加/滤色，或作为编辑模型的干净输入（无 alpha）。",
        "带 alpha 的脏污（RGBA，alpha = 亮度）：用于正常混合合成。不要把它接到编辑模型上。",
    ],
});

registerNodeInfo("ERCameraDefocus", {
    title: "ER 焦外虚化",
    desc: "带实时 GPU 预览的镜头失焦：真实光圈形状的模糊（圆形或 N 叶片多边形焦外，可旋转）、高光增强（让高光形成明亮的焦外光斑而不是过曝发白），以及可选的焦外边缘彩色镶边。半径以图像宽度的百分比表示，因此效果在不同分辨率下保持一致。",
    outputs: { images: "图像" },
});

registerNodeInfo("ERRegrain", {
    title: "ER 胶片颗粒",
    desc: "带实时预览的 GPU 胶片颗粒（regrain）：强度、颗粒尺寸、彩色颗粒比例以及类胶片的亮度响应。在帧序列（视频）上颗粒逐帧变化，如同真实胶片。",
    outputs: { images: "图像", grain_layer: "颗粒层", grain_layer_alpha: "颗粒层（透明）" },
    outputTooltips: [
        "应用颗粒后的图像。",
        "中灰背景上的颗粒（RGB）：在合成软件中用叠加/线性光，或直接输入编辑模型（无 alpha）。",
        "带 alpha 的颗粒（RGBA，alpha = 相对中灰的偏差）：用于正常混合合成。不要把它接到编辑模型上。",
    ],
});

registerNodeInfo("ERRelighting", {
    title: "ER 重打光",
    desc: "带实时 GPU 预览的屏幕空间重打光：最多 4 盏可拖动的点光（颜色、强度、半径、高度），使用由深度图导出的法线进行着色。连接深度图（例如 Depth Anything）可获得最佳效果。",
    widgets: {
        ambient: "环境光",
        normal_strength: "法线强度",
        normal_smooth: "深度平滑",
        invert_depth: "反转深度",
    },
    outputs: { images: "图像" },
    tooltips: {
        ambient: "保留多少原始光照（0 = 仅使用你的灯光）",
        normal_strength: "由深度图导出的法线起伏强度",
        invert_depth: "如果你的深度图是黑色 = 近处，请启用",
        normal_smooth: "推导法线前的深度平滑（像素）— 越高越干净、起伏越柔和",
        depth: "深度图（白色 = 近处）。未连接时使用基于亮度的伪深度",
        normals: "可选法线贴图（OpenGL 约定）。连接后将替代由深度推导的法线",
    },
});

registerNodeInfo("ERVideoColorCorrect", {
    title: "ER 视频调色",
    desc: "带实时 GPU 预览的视频调色：视频在节点内播放，并通过 WebGL 实时应用校正，可调整色温（开尔文）、色相、饱和度、对比度、伽马、增益、偏移以及阴影/中间调/高光色轮。运行后输出完整质量。",
    widgets: {
        fps: "帧率",
        temperature: "色温 (K)",
        hue: "色相",
        saturation: "饱和度",
        contrast: "对比度",
        gamma: "伽马",
        gain: "增益",
        offset: "偏移",
    },
    outputs: { images: "图像" },
    tooltips: {
        fps: "预览播放的帧率",
        temperature: "开尔文色温。6500 = 中性，越低越暖，越高越冷",
    },
});

registerNodeInfo("VideoCompareSlider", {
    title: "ER 视频对比",
    desc: "用实时划像滑块对比两段视频。fps 为 0 时会从工作流中自动检测帧率（上游视频文件或视频节点上显式设置的 fps）。",
    widgets: { video_a: "视频 A", video_b: "视频 B", fps: "帧率" },
    tooltips: {
        video_a: "生成的视频（滑块左侧）",
        video_b: "参考视频（滑块右侧）",
        fps: "0 = 从此工作流中的源视频自动检测帧率；设置数值则覆盖",
    },
});

function registerNodeInfo(type, info) {
    NODE_INFO[type] = { ...(NODE_INFO[type] || {}), ...info };
}

// --------------------------------------------------------------------------
// Language state
// --------------------------------------------------------------------------
const listeners = new Set();
const DEFS = [];
let lang = null;
let memPref = null; // in-memory preference (works even if localStorage is off)
let busy = false;
let settingAdded = false;

function browserLang() {
    try {
        const l = (navigator.languages && navigator.languages[0]) || navigator.language || "";
        return String(l).toLowerCase().startsWith("zh") ? "zh" : "en";
    } catch (e) {
        return "en";
    }
}

function readStored() {
    try {
        const v = localStorage.getItem(LS_KEY);
        return v === "en" || v === "zh" || v === "auto" ? v : null;
    } catch (e) {
        return null;
    }
}

function readSetting() {
    try {
        const v = app.ui?.settings?.getSettingValue?.(SETTING_ID);
        return v === "en" || v === "zh" || v === "auto" ? v : null;
    } catch (e) {
        return null;
    }
}

/** ComfyUI's own interface language, if it is available. */
function comfyLocale() {
    try {
        return String(app.ui?.settings?.getSettingValue?.("Comfy.Locale") || "");
    } catch (e) {
        return "";
    }
}

/** "auto": Chinese when ComfyUI or the browser is Chinese, English otherwise. */
function autoLang() {
    if (comfyLocale().toLowerCase().startsWith("zh")) return "zh";
    return browserLang();
}

function resolveLang() {
    // explicit choice made in this session > saved choice > ComfyUI setting
    const pref = readStored() || memPref || readSetting() || "auto";
    return pref === "auto" ? autoLang() : pref;
}

/** Current interface language: "en" or "zh". */
export function getLang() {
    // re-resolve every time: ComfyUI may load the stored setting slightly
    // after this module is imported
    lang = resolveLang();
    return lang;
}

/** Translate an English UI string to the current language. */
export function T(en, ns) {
    if (getLang() !== "zh") return en;
    if (ns) {
        const k = ns + "|" + en;
        if (ZH[k] !== undefined) return ZH[k];
    }
    return ZH[en] !== undefined ? ZH[en] : en;
}

/** Translate with {placeholder} interpolation: TF("Flare {n}", {n: 2}). */
export function TF(en, params, ns) {
    let out = T(en, ns);
    if (params) {
        out = out.replace(/\{(\w+)\}/g, (m, k) =>
            params[k] !== undefined && params[k] !== null ? String(params[k]) : m
        );
    }
    return out;
}

/** Subscribe to language changes. Returns an unsubscribe function. */
export function onLangChange(cb) {
    listeners.add(cb);
    return () => listeners.delete(cb);
}

function applyDef(entry) {
    const { nodeData, type } = entry;
    const info = NODE_INFO[type] || {};
    const zh = getLang() === "zh";
    if (info.enTitle) nodeData.display_name = zh ? info.title : info.enTitle;
    if (entry.desc) nodeData.description = zh ? (info.desc || entry.desc) : entry.desc;
    if (entry.outputs && Array.isArray(entry.outputs)) {
        const src = nodeData.output_name;
        if (Array.isArray(src)) {
            nodeData.output_name = entry.outputs.map((n) => (zh ? info.outputs?.[n] || n : n));
        } else if (zh && info.outputs) {
            // no output_name on this frontend: expose the translated list anyway
            nodeData.output_name = entry.outputs.map((n) => info.outputs?.[n] || n);
        }
    }
    if (entry.outputTips && Array.isArray(entry.outputTips) && Array.isArray(nodeData.output_tooltips)) {
        nodeData.output_tooltips = entry.outputTips.map((tip, i) =>
            zh && info.outputTooltips?.[i] ? info.outputTooltips[i] : tip
        );
    }
    for (const name of Object.keys(entry.tooltips || {})) {
        const spec = findInputSpec(nodeData, name);
        if (spec && spec[1] && typeof spec[1] === "object") {
            spec[1].tooltip = zh ? info.tooltips?.[name] || entry.tooltips[name] : entry.tooltips[name];
        }
    }
}

function findInputSpec(nodeData, name) {
    for (const grp of ["required", "optional"]) {
        const spec = nodeData?.input?.[grp]?.[name];
        if (spec) return spec;
    }
    return null;
}

/**
 * Localize a node definition (title, description, output names/tooltips and
 * input tooltips). Call it from beforeRegisterNodeDef after the type guard.
 */
export function erLocalizeNodeDef(nodeData, type) {
    installSetting();
    const info = NODE_INFO[type];
    if (!info || !nodeData) return;
    if (!info.enTitle && typeof nodeData.display_name === "string") info.enTitle = nodeData.display_name;
    let entry = DEFS.find((e) => e.nodeData === nodeData);
    if (!entry) {
        // canonical English output names: prefer what the frontend sent, else
        // rebuild them from the info map (same order as the Python outputs)
        const outputs = Array.isArray(nodeData.output_name)
            ? nodeData.output_name.slice()
            : info.outputs
              ? Object.keys(info.outputs)
              : null;
        entry = {
            nodeData,
            type,
            desc: typeof nodeData.description === "string" ? nodeData.description : "",
            outputs,
            outputTips: Array.isArray(nodeData.output_tooltips) ? nodeData.output_tooltips.slice() : null,
            tooltips: {},
        };
        for (const grp of ["required", "optional"]) {
            const defs = nodeData.input?.[grp] || {};
            for (const name of Object.keys(defs)) {
                const spec = defs[name];
                if (Array.isArray(spec) && spec[1] && typeof spec[1].tooltip === "string") {
                    entry.tooltips[name] = spec[1].tooltip;
                }
            }
        }
        DEFS.push(entry);
    }
    applyDef(entry);
}

/** Translate the labels of the native widgets of a node instance. */
export function erLocalizeWidgets(node) {
    const info = NODE_INFO[node?.type];
    if (!info?.widgets) return;
    const zh = getLang() === "zh";
    for (const [name, label] of Object.entries(info.widgets)) {
        const w = node.widgets?.find((x) => x.name === name);
        if (!w) continue;
        if (w.__erOrigLabel === undefined) w.__erOrigLabel = w.label ?? null;
        if (zh) {
            w.label = label;
        } else if (w.__erOrigLabel === null) {
            delete w.label;
        } else {
            w.label = w.__erOrigLabel;
        }
    }
}

function retitle(node) {
    const info = NODE_INFO[node?.type];
    if (!info?.title) return;
    const cur = node.title;
    const en = info.enTitle || node.type;
    // only touch titles that are still the automatic ones (never rename nodes
    // the user renamed by hand)
    if (!cur || cur === info.title || cur === en || cur === node.type) {
        node.title = getLang() === "zh" ? info.title : en;
    }
}

/** Normalizes the automatic node title for the current language. Safe to
 *  call at any time; hand-renamed nodes are left untouched. */
export function erRetitleNode(node) {
    try {
        retitle(node);
    } catch (e) {}
}

/** Re-apply the current language to the whole canvas (no reload needed). */
export function applyLanguage() {
    const zh = getLang() === "zh";
    try {
        document.documentElement.setAttribute("lang", zh ? "zh-CN" : "en");
    } catch (e) {}
    for (const entry of DEFS) {
        try {
            applyDef(entry);
        } catch (e) {}
    }
    const nodes = app.graph?._nodes || [];
    // two passes: retitle everything first, so panels that list node titles
    // (wedge sequencer selectors) rebuild with the new names
    for (const node of nodes) {
        try {
            retitle(node);
        } catch (e) {}
        try {
            erLocalizeWidgets(node);
        } catch (e) {}
    }
    for (const node of nodes) {
        try {
            node._erRelabel?.();
        } catch (e) {
            console.warn("[ER i18n] relabel failed:", e);
        }
    }
    try {
        app.graph?.setDirtyCanvas?.(true, true);
    } catch (e) {}
}

/**
 * Change the interface language. Accepts "en", "zh" or "auto" (follow
 * ComfyUI's language, then the browser). Persists the choice and updates
 * ComfyUI's setting when possible.
 */
export function setLang(value, opts = {}) {
    const pref = value === "zh" || value === "en" ? value : "auto";
    memPref = pref;
    try {
        localStorage.setItem(LS_KEY, pref);
    } catch (e) {}
    lang = pref === "auto" ? autoLang() : pref;
    if (opts.syncSetting !== false) {
        try {
            const s = app.ui?.settings;
            if (s && s.getSettingValue?.(SETTING_ID) !== pref) {
                busy = true;
                s.setSettingValue?.(SETTING_ID, pref);
                busy = false;
            }
        } catch (e) {
            busy = false;
        }
    }
    applyLanguage();
    for (const cb of [...listeners]) {
        try {
            cb(lang);
        } catch (e) {}
    }
    return lang;
}

function installSetting() {
    if (settingAdded) return;
    const s = app.ui?.settings;
    if (!s?.addSetting) return;
    settingAdded = true;
    try {
        s.addSetting({
            id: SETTING_ID,
            name: "ER VFX · Language / 语言",
            tooltip: "Interface language of the ER VFX Nodepack. / ER VFX 节点包的界面语言。",
            type: "combo",
            options: [
                { text: "Auto (ComfyUI language / browser) / 自动（跟随界面语言）", value: "auto" },
                { text: "English", value: "en" },
                { text: "中文", value: "zh" },
            ],
            defaultValue: "auto",
            onChange: (v) => {
                if (!busy) setLang(v, { syncSetting: false });
            },
        });
        // keep the settings dropdown in sync with the stored choice
        const pref = readStored();
        if (pref && s.getSettingValue?.(SETTING_ID) !== pref) {
            busy = true;
            s.setSettingValue?.(SETTING_ID, pref);
            busy = false;
        }
    } catch (e) {}
}

/** Adds the "Language / 语言" entry to a node's right-click menu. */
export function erAppendLanguageMenu(options) {
    if (!Array.isArray(options)) return;
    const zh = getLang() === "zh";
    options.push(null, {
        content: zh ? "Language / 语言：切换为 English" : "Language / 语言：切换为中文",
        callback: () => setLang(zh ? "en" : "zh"),
    });
}

// register the ComfyUI setting as early as possible
installSetting();

// ComfyUI loads its stored settings asynchronously on some versions: re-check
// shortly after startup so a saved Chinese/English choice is applied without
// needing a manual toggle.
function refreshLang() {
    const before = lang;
    const now = getLang();
    if (before !== null && before !== now) applyLanguage();
}
if (typeof setTimeout === "function") {
    setTimeout(refreshLang, 1200);
    setTimeout(refreshLang, 4000);
}
