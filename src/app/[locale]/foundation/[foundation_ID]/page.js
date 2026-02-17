import FoundationDetails from "@/components/foundation/foundationDetails/FoundationDetails";

// fake DB
const getFoundationData = (id) => ({
  name: "مؤسسة الأمل الخيرية",
  description: "تعمل على دعم الأسر الأكثر احتياجاً",
  image: "/images/0.png",
});

export async function generateMetadata({ params }) {
  const { id } = params;
  const foundation = getFoundationData(id);

  const SITE_URL = "https://your-site.com"; // غيرها بالدومين الحقيقي

  return {
    title: foundation.name,
    description: foundation.description,
    openGraph: {
      title: foundation.name,
      description: foundation.description,
      url: `${SITE_URL}/foundation/${id}`,
      images: [
        {
          url: `${SITE_URL}${foundation.image}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: foundation.name,
      description: foundation.description,
      images: [`${SITE_URL}${foundation.image}`],
    },
  };
}

export default function Page({ params }) {
  const { id } = params;
  const foundation = getFoundationData(id);

  return (
    <div>
      <FoundationDetails
        params={params}
        name={foundation.name}
        image={foundation.image}
      />
    </div>
  );
}
