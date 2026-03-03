export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      bookings: {
        Row: {
          created_at: string
          customer_email: string | null
          customer_name: string
          customer_phone: string
          guests_count: number | null
          id: string
          message: string | null
          preferred_date: string | null
          status: string
          tour_id: string | null
        }
        Insert: {
          created_at?: string
          customer_email?: string | null
          customer_name: string
          customer_phone: string
          guests_count?: number | null
          id?: string
          message?: string | null
          preferred_date?: string | null
          status?: string
          tour_id?: string | null
        }
        Update: {
          created_at?: string
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string
          guests_count?: number | null
          id?: string
          message?: string | null
          preferred_date?: string | null
          status?: string
          tour_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_tour_id_fkey"
            columns: ["tour_id"]
            isOneToOne: false
            referencedRelation: "tours"
            referencedColumns: ["id"]
          },
        ]
      }
      cities: {
        Row: {
          card_layout: string | null
          created_at: string | null
          cta_description_en: string | null
          cta_description_ru: string | null
          cta_title_en: string | null
          cta_title_ru: string | null
          description_en: string | null
          description_ru: string | null
          hero_image_url: string | null
          icon: string | null
          id: string
          is_published: boolean | null
          name_en: string | null
          name_ru: string
          overview_en: string | null
          overview_ru: string | null
          overview_secondary_en: string | null
          overview_secondary_ru: string | null
          seo_description_en: string | null
          seo_description_ru: string | null
          seo_title_en: string | null
          seo_title_ru: string | null
          shared_included_en: string[] | null
          shared_included_ru: string[] | null
          shared_not_included_en: string[] | null
          shared_not_included_ru: string[] | null
          shared_who_for_en: string[] | null
          shared_who_for_ru: string[] | null
          slug: string
          sort_order: number | null
          subtitle_en: string | null
          subtitle_ru: string | null
          updated_at: string | null
        }
        Insert: {
          card_layout?: string | null
          created_at?: string | null
          cta_description_en?: string | null
          cta_description_ru?: string | null
          cta_title_en?: string | null
          cta_title_ru?: string | null
          description_en?: string | null
          description_ru?: string | null
          hero_image_url?: string | null
          icon?: string | null
          id?: string
          is_published?: boolean | null
          name_en?: string | null
          name_ru: string
          overview_en?: string | null
          overview_ru?: string | null
          overview_secondary_en?: string | null
          overview_secondary_ru?: string | null
          seo_description_en?: string | null
          seo_description_ru?: string | null
          seo_title_en?: string | null
          seo_title_ru?: string | null
          shared_included_en?: string[] | null
          shared_included_ru?: string[] | null
          shared_not_included_en?: string[] | null
          shared_not_included_ru?: string[] | null
          shared_who_for_en?: string[] | null
          shared_who_for_ru?: string[] | null
          slug: string
          sort_order?: number | null
          subtitle_en?: string | null
          subtitle_ru?: string | null
          updated_at?: string | null
        }
        Update: {
          card_layout?: string | null
          created_at?: string | null
          cta_description_en?: string | null
          cta_description_ru?: string | null
          cta_title_en?: string | null
          cta_title_ru?: string | null
          description_en?: string | null
          description_ru?: string | null
          hero_image_url?: string | null
          icon?: string | null
          id?: string
          is_published?: boolean | null
          name_en?: string | null
          name_ru?: string
          overview_en?: string | null
          overview_ru?: string | null
          overview_secondary_en?: string | null
          overview_secondary_ru?: string | null
          seo_description_en?: string | null
          seo_description_ru?: string | null
          seo_title_en?: string | null
          seo_title_ru?: string | null
          shared_included_en?: string[] | null
          shared_included_ru?: string[] | null
          shared_not_included_en?: string[] | null
          shared_not_included_ru?: string[] | null
          shared_who_for_en?: string[] | null
          shared_who_for_ru?: string[] | null
          slug?: string
          sort_order?: number | null
          subtitle_en?: string | null
          subtitle_ru?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      tours: {
        Row: {
          badge_color: string | null
          badge_en: string | null
          badge_ru: string | null
          city_id: string | null
          cover_image: string | null
          created_at: string
          currency: string
          duration: string | null
          excluded_en: string[] | null
          excluded_ru: string[] | null
          full_description_en: string | null
          full_description_ru: string | null
          gallery_images: string[] | null
          group_type_en: string | null
          group_type_ru: string | null
          highlights_en: string[] | null
          highlights_ru: string[] | null
          id: string
          included_en: string[] | null
          included_ru: string[] | null
          is_published: boolean
          languages_en: string | null
          languages_ru: string | null
          location: string | null
          meeting_point_en: string | null
          meeting_point_ru: string | null
          price: number
          price_text_en: string | null
          price_text_ru: string | null
          program_en: string[] | null
          program_ru: string[] | null
          route_en: string | null
          route_ru: string | null
          short_description_en: string | null
          short_description_ru: string | null
          sort_order: number
          start_time_en: string | null
          start_time_ru: string | null
          title_en: string | null
          title_ru: string
          tour_type: string
          tour_type_icon: string | null
          updated_at: string
        }
        Insert: {
          badge_color?: string | null
          badge_en?: string | null
          badge_ru?: string | null
          city_id?: string | null
          cover_image?: string | null
          created_at?: string
          currency?: string
          duration?: string | null
          excluded_en?: string[] | null
          excluded_ru?: string[] | null
          full_description_en?: string | null
          full_description_ru?: string | null
          gallery_images?: string[] | null
          group_type_en?: string | null
          group_type_ru?: string | null
          highlights_en?: string[] | null
          highlights_ru?: string[] | null
          id?: string
          included_en?: string[] | null
          included_ru?: string[] | null
          is_published?: boolean
          languages_en?: string | null
          languages_ru?: string | null
          location?: string | null
          meeting_point_en?: string | null
          meeting_point_ru?: string | null
          price?: number
          price_text_en?: string | null
          price_text_ru?: string | null
          program_en?: string[] | null
          program_ru?: string[] | null
          route_en?: string | null
          route_ru?: string | null
          short_description_en?: string | null
          short_description_ru?: string | null
          sort_order?: number
          start_time_en?: string | null
          start_time_ru?: string | null
          title_en?: string | null
          title_ru: string
          tour_type?: string
          tour_type_icon?: string | null
          updated_at?: string
        }
        Update: {
          badge_color?: string | null
          badge_en?: string | null
          badge_ru?: string | null
          city_id?: string | null
          cover_image?: string | null
          created_at?: string
          currency?: string
          duration?: string | null
          excluded_en?: string[] | null
          excluded_ru?: string[] | null
          full_description_en?: string | null
          full_description_ru?: string | null
          gallery_images?: string[] | null
          group_type_en?: string | null
          group_type_ru?: string | null
          highlights_en?: string[] | null
          highlights_ru?: string[] | null
          id?: string
          included_en?: string[] | null
          included_ru?: string[] | null
          is_published?: boolean
          languages_en?: string | null
          languages_ru?: string | null
          location?: string | null
          meeting_point_en?: string | null
          meeting_point_ru?: string | null
          price?: number
          price_text_en?: string | null
          price_text_ru?: string | null
          program_en?: string[] | null
          program_ru?: string[] | null
          route_en?: string | null
          route_ru?: string | null
          short_description_en?: string | null
          short_description_ru?: string | null
          sort_order?: number
          start_time_en?: string | null
          start_time_ru?: string | null
          title_en?: string | null
          title_ru?: string
          tour_type?: string
          tour_type_icon?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tours_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
