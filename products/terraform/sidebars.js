module.exports = {
  terraformpanos: [
    "terraform/docs/panos/intro",
    {
      type: "category",
      collapsed: true,
      label: "Getting Started Tutorials",
      items: [
        "terraform/docs/panos/tutorials/setup",
        {
          type: "category",
          collapsed: true,
          label: "Information Gathering Tasks",
          items: [
            "terraform/docs/panos/tutorials/info-gather-sysinfo",
            "terraform/docs/panos/tutorials/info-gather-secrules",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Configuration Tasks",
          items: [
            "terraform/docs/panos/tutorials/config-secpol-and-objs",
            "terraform/docs/panos/tutorials/config-networking",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "How-To Guides",
      items: [
        "terraform/docs/panos/guides/commits",
        "terraform/docs/panos/guides/panorama-config",
        "terraform/docs/panos/guides/policy-from-yaml",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Background Information",
      items: [
        "terraform/docs/panos/info/background",
        "terraform/docs/panos/info/connectivity",
        "terraform/docs/panos/info/parallelism",
        "terraform/docs/panos/info/create-before-destroy",
        "terraform/docs/panos/info/panorama-resources",
        "terraform/docs/panos/info/panos-versions",
        "terraform/docs/panos/info/auditcomments",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Reference",
      items: ["terraform/docs/panos/reference/provider"],
    },
  ],
  terraformcloudngfw: [
    "terraform/docs/cloudngfw/intro",
    {
      type: "category",
      collapsed: false,
      label: "AWS",
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Getting Started Tutorial",
          items: [
            "terraform/docs/cloudngfw/aws/tutorials/intro",
            "terraform/docs/cloudngfw/aws/tutorials/prepare-aws",
            "terraform/docs/cloudngfw/aws/tutorials/prepare-cloudngfw",
            "terraform/docs/cloudngfw/aws/tutorials/create-rulestack",
            "terraform/docs/cloudngfw/aws/tutorials/commit-rulestack",
            "terraform/docs/cloudngfw/aws/tutorials/create-cloudngfws",
            "terraform/docs/cloudngfw/aws/tutorials/create-aws-routing",
            "terraform/docs/cloudngfw/aws/tutorials/review",
          ],
        },
        // {
        //   type: "category",
        //   collapsed: true,
        //   label: "How-To Guides",
        //   items: ["terraform/docs/cloudngfw/aws/guides/guide"],
        // },
        // {
        //   type: "category",
        //   collapsed: true,
        //   label: "Background Information",
        //   items: ["terraform/cloudngfw/aws/info/info"],
        // },
        {
          type: "category",
          collapsed: true,
          label: "Reference",
          items: ["terraform/docs/cloudngfw/aws/reference/provider"],
        },
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Azure",
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Securing vWAN Tutorial",
          items: ["terraform/docs/cloudngfw/azure/tutorials/intro"],
        },
        {
          type: "category",
          collapsed: true,
          label: "Reference",
          items: ["terraform/docs/cloudngfw/azure/reference/provider"],
        },
      ],
    },
  ],
  terraform_swfw_aws: [
    "terraform/docs/swfw/aws/vmseries/overview",
    {
      type: "category",
      collapsed: true,
      label: "Reference Architectures",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/aws/vmseries/reference-architectures",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/aws/vmseries/reference-architectures",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Modules",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/aws/vmseries/modules",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/aws/vmseries/modules",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Examples",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/aws/vmseries/examples",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/aws/vmseries/examples",
        },
      ],
    },
    // "terraform/docs/swfw/aws/cloudngfw/overview",
    // {
    //   type: "category",
    //   collapsed: true,
    //   label: "Reference Architectures",
    //   link: {
    //     type: "doc",
    //     id: "terraform/docs/swfw/aws/cloudngfw/reference-architectures",
    //   },
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "terraform/docs/swfw/aws/cloudngfw/reference-architectures",
    //     },
    //   ],
    // },
    // {
    //   type: "category",
    //   collapsed: true,
    //   label: "Modules",
    //   link: {
    //     type: "doc",
    //     id: "terraform/docs/swfw/aws/cloudngfw/modules",
    //   },
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "terraform/docs/swfw/aws/cloudngfw/modules",
    //     },
    //   ],
    // },
  ],
  terraform_swfw_azure: [
    "terraform/docs/swfw/azure/vmseries/overview",
    {
      type: "category",
      collapsed: true,
      label: "Reference Architectures",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/azure/vmseries/reference-architectures",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/azure/vmseries/reference-architectures",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Modules",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/azure/vmseries/modules",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/azure/vmseries/modules",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Examples",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/azure/vmseries/examples",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/azure/vmseries/examples",
        },
      ],
    },
    // "terraform/docs/swfw/azure/cloudngfw/overview",
    // {
    //   type: "category",
    //   collapsed: true,
    //   label: "Reference Architectures",
    //   link: {
    //     type: "doc",
    //     id: "terraform/docs/swfw/azure/cloudngfw/reference-architectures",
    //   },
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName:
    //         "terraform/docs/swfw/azure/cloudngfw/reference-architectures",
    //     },
    //   ],
    // },
    // {
    //   type: "category",
    //   collapsed: true,
    //   label: "Modules",
    //   link: {
    //     type: "doc",
    //     id: "terraform/docs/swfw/azure/cloudngfw/modules",
    //   },
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "terraform/docs/swfw/azure/cloudngfw/modules",
    //     },
    //   ],
    // },
  ],
  terraform_swfw_gcp: [
    "terraform/docs/swfw/gcp/vmseries/overview",
    {
      type: "category",
      collapsed: true,
      label: "Reference Architectures",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/gcp/vmseries/reference-architectures",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/gcp/vmseries/reference-architectures",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Modules",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/gcp/vmseries/modules",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/gcp/vmseries/modules",
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Examples",
      link: {
        type: "doc",
        id: "terraform/docs/swfw/gcp/vmseries/examples",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "terraform/docs/swfw/gcp/vmseries/examples",
        },
      ],
    },
  ],
};
